import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { useEffect, useState } from 'react'

function useUser() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  return user
}

export default useUser
