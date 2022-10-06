// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'

const GuestGuard = props => {
  const { children, fallback } = props
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (!loading && user) {
      router.replace('/')
    }
  }, [user, loading, router.route])

  if (loading || (!loading && user !== null)) {
    return fallback
  }

  return <>{children}</>
}

export default GuestGuard
