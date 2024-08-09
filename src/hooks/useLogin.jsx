import { useState, useEffect } from 'react'
import { auth } from '/src/firebase/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function useLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const storedEmail = localStorage.getItem('storedEmail')
    if (storedEmail) {
      setEmail(storedEmail)
      setIsChecked(true)
    }
  }, [])

  const handleLogin = async () => {
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

  function setEmailValue(e) {
    setEmail(e.target.value)
  }

  function setPasswordValue(e) {
    setPassword(e.target.value)
  }
  const handleIsToggleChecked = (e) => {
    if (e.target.checked) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
      localStorage.removeItem('storedEmail')
    }
  }

  return {
    email,
    setEmailValue,
    password,
    setPasswordValue,
    error,
    isChecked,
    setIsChecked,
    handleLogin,
    handleIsToggleChecked,
  }
}

export default useLogin
