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
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      if (authUser) {
        authUser
          .getIdTokenResult(true)
          .then(res => {
            if (res.claims) {
              setUser({
                email: authUser.email,
                user_id: authUser.uid,
                photoURL: authUser.photoURL,
                tel: authUser.phoneNumber,
                email_verified: authUser.emailVerified,
                company: res.claims.company ? res.claims.company : '',
                name: authUser.displayName,
                role: res.claims.role ? res.claims.role : 'guest',
                is_ariadne: res.claims.is_ariadne ? res.claims.is_ariadne : false,
                username: res.claims.username ? res.claims.username : null
              })
              setLoading(false)
            } else {
              setUser({
                email: authUser.email,
                user_id: authUser.uid,
                photoURL: authUser.photoURL,
                tel: authUser.phoneNumber,
                email_verified: authUser.emailVerified,
                name: authUser.displayName,
                role: 'guest',
                company: '',
                username: '',
                is_ariadne: false
              })
              setLoading(false)
            }
          })
          .catch(e => console.log(e))
        // setUser({
        //   ...user,
        //   email: authUser.email,
        //   user_id: authUser.uid,
        //   photoURL: authUser.photoURL,
        //   tel: authUser.phoneNumber,
        //   email_verified: authUser.emailVerified,
        //   name: authUser.displayName,
        //   role: 'admin'
        // })
      } else {
        setUser(null)
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])
  console.log(user)
  const handleLogin = (params, errorCallback) => {
    // setLoading(true)
    signInWithEmailAndPassword(auth, params.email, params.password)
      .then(userCredential => {
        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

        userCredential.user
          .getIdTokenResult(true)
          .then(res => {
            if (res.claims) {
              setUser({
                email: userCredential.user.email,
                user_id: userCredential.user.uid,
                photoURL: userCredential.user.photoURL,
                tel: userCredential.user.phoneNumber,
                email_verified: userCredential.user.emailVerified,
                name: userCredential.user.displayName,
                company: res.claims.company ? res.claims.company : '',
                role: res.claims.role ? res.claims.role : 'guest',
                is_ariadne: res.claims.is_ariadne ? res.claims.is_ariadne : false,
                username: res.claims.username ? res.claims.username : null
              })
              // setLoading(false)
            } else {
              setUser({
                email: userCredential.user.email,
                user_id: userCredential.user.uid,
                photoURL: userCredential.user.photoURL,
                tel: userCredential.user.phoneNumber,
                email_verified: userCredential.user.emailVerified,
                name: userCredential.user.displayName,
                role: 'guest',
                is_ariadne: false,
                username: null
              })
              // setLoading(false)
            }
          })
          .catch(e => console.log(e))

        if (user) {
          router.push(redirectURL)
          // setLoading(false)
        }
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setLoading(true)
    setUser(null)
    router.replace('/login')
    auth.signOut()
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
