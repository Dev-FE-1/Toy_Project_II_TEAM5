import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '/src/firebase/firebaseConfig'

function useHandleLogout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/signin')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return handleLogout
}

export default useHandleLogout
