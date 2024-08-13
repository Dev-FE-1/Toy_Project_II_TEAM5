import { useState } from 'react'
import { auth } from '/src/firebase/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function useLogin(email, password, isChecked) {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      if (isChecked) {
        localStorage.setItem('storedEmail', email)
      }
      navigate('/')
    } catch (error) {
      setError('유효한 아이디, 비밀번호를 입력해주세요!')
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
  }

  return {
    error,
    handleLogin,
  }
}

export default useLogin
