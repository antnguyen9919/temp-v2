// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'src/configs/firebase-client'

const AuthGuard = props => {
  const { children, fallback } = props
  const { user, loading } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (!loading && user === null) {
      if (router.asPath !== '/') {
        router.replace({
          pathname: '/login',
          query: { returnUrl: router.asPath }
        })
      } else {
        router.replace('/login')
      }
    }
  }, [user, loading, router.route])

  if (loading || (!loading && user === null)) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard

// useEffect(() => {
//   // console.log('loading: ', auth.loading, 'user: ', auth.user)
//   if (!router.isReady) {
//     return
//   }
//   setLoading(true)
//   const subscriber = onAuthStateChanged(auth, authUser => {
//     if (!authUser) {
//       setLoading(false)
//       router.replace('/login', { permanent: false })
//       // if (router.asPath !== '/') {
//       //   router.replace({
//       //     pathname: '/login',
//       //     query: { returnUrl: router.asPath }
//       //   })
//       // } else {
//       //   router.replace('/login')
//       // }
//     }
//   })
//   setLoading(false)
//   return subscriber
// }, [router.route, auth, onAuthStateChanged])
