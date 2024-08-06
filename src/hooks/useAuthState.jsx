import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '/src/firebase/firebaseConfig'

function useAuthState() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  //   () => {
  //   const curUser = sessionStorage.getItem('user')
  //   return curUser ? JSON.parse(curUser) : null
  // }) //세션스토리지에 user정보가 있으면 user는 참 값을 갖고 없으면 null값으로 초기화
  // const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('now:', currentUser)
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  return { user, loading }
}

export default useAuthState
