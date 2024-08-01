import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@firebase/firebaseConfig'
import styled from 'styled-components'
import Flex from '@components/shared/Flex'

export default function Login() {
  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log('User logged in:', userCredential.user)
    } catch (error) {
      console.error('Error logging in user:', error)
    }
  }

  const hadleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')

    console.log(email, password)
    loginUser(email, password)
  }
  return (
    <>
      <Flex as="form" $justify="flex-start" onSubmit={hadleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <Button type="submit"></Button>
      </Flex>
    </>
  )
}

const Button = styled.button`
  border: 1px inset rgb(118, 118, 118);
  background: white;
  width: 169.55px;
  height: 20.89px;
`
