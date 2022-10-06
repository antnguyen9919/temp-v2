import { useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'
import { AuthFBContext } from 'src/context/AuthFirebaseContext'
export const useAuth = () => useContext(AuthFBContext)
