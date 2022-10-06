// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'

const AuthGuard = props => {
  const { children, fallback } = props
  const { user, loading } = useAuth()
  const router = useRouter()
  useEffect(() => {
    // console.log('loading: ', auth.loading, 'user: ', auth.user)
    if (!router.isReady) {
      return
    }
    if (loading === false && user === null) {
      // if (auth.user === null && !window.localStorage.getItem('userData')) {
      if (router.asPath !== '/') {
        router.replace({
          pathname: '/login',
          query: { returnUrl: router.asPath }
        })
      } else {
        router.replace('/login')
      }
    }
  }, [router.route, user, loading])

  if (loading || user === null) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard
