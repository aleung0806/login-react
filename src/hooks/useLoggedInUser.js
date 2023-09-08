import { useEffect, useState } from 'react'
import authService from '../services/auth'

export const useLoggedInUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchVerification = async () => {
      const verifiedUser = await authService.verify()
      setUser(verifiedUser)
    }

    fetchVerification().then(() => {
      console.log('user', user)
    }).catch()

  }, [])

  return user
}

