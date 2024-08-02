import { auth } from '@firebase/firebaseConfig'
import fetchMyProfile from '@mock/fetchMyProfile'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

function useUser() {
  const [user, setUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      if (currentUser) {
        const profileData = await fetchMyProfile(currentUser.uid)
        setUserProfile(profileData)
      }
    })

    return () => unsubscribe()
  }, [])

  return { user, userProfile, loading }
}

export default useUser
