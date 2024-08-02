import { auth } from '@firebase/firebaseConfig'
import { useState } from 'react'

function useSignout() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const signout = async () => {
    setLoading(true)
    setError(null)

    try {
      await auth.signOut()
    } catch (err) {
      console.error('Error logging out:', err)
      setError('Failed to log out')
    } finally {
      setLoading(false)
    }
  }

  return { signout, loading, error }
}

export default useSignout
