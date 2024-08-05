import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '/src/firebase/firebaseConfig'

function useAuthState() {
  const [user, setUser] = useState(() => {
    const curUser = sessionStorage.getItem('user')
    return curUser ? JSON.parse(curUser) : null
  }) //세션스토리지에 user정보가 있으면 user는 참 값을 갖고 없으면 null값으로 초기화

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        sessionStorage.setItem('user', JSON.stringify(currentUser))
      } else {
        setUser(null)
        sessionStorage.removeItem('user')
      }
    })
    return () => unsubscribe()
  }, [])

  return user
}

export default useAuthState
