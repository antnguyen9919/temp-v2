// ** React Imports
import { createContext, useEffect, useState } from 'react'
import { auth } from 'src/configs/firebase-client'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,

  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),

  register: () => Promise.resolve()
}
const AuthFBContext = createContext(defaultProvider)
const formatAuthUser = user => {
  return {
    uid: user.uid,
    email: user.email,
    role: 'admin'
  }
}
const AuthFirebaseProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = async authState => {
    if (!authState) {
      setUser(null)
      setLoading(false)
    } else {
      setLoading(true)
      const formattedUser = formatAuthUser(authState)
      setUser(formattedUser)
      setLoading(false)
    }
  }

  const resetUser = () => {
    setUser(null)
    setLoading(true)
  }
  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      if (authUser) {
        setUser({
          email: authUser.email,
          user_id: authUser.uid,
          photoURL: authUser.photoURL,
          tel: authUser.phoneNumber,
          email_verified: authUser.emailVerified,
          name: authUser.displayName,
          role: 'admin'
        })
        setLoading(false)
      } else {
        setUser(null)
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  const handleLogin = (params, errorCallback) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, params.email, params.password)
      .then(userCredential => {
        const returnUrl = router.query.returnUrl
        setUser({
          email: userCredential.user.email,
          user_id: userCredential.user.uid,
          photoURL: userCredential.user.photoURL,
          tel: userCredential.user.phoneNumber,
          email_verified: userCredential.user.emailVerified,
          name: userCredential.user.displayName,
          role: 'admin'
          //   claims: get_id_token()
        })

        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.push('/')
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setLoading(true)
    setUser(null)
    auth.signOut()
    router.replace('/login')
  }

  const handleRegister = (params, errorCallback) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,

    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthFBContext.Provider value={values}>{children}</AuthFBContext.Provider>
}

export { AuthFBContext, AuthFirebaseProvider }
