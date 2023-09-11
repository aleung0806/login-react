import { useEffect, useState } from 'react'
import authService from '../services/auth'

export const useLoggedInUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchVerification = async () => {
      const verifiedUser = await authService.auth()
      setUser(verifiedUser)
    }

    fetchVerification().then(() => {
      console.log('user found:', user)
    }).catch()

  }, [])

  return user
}

