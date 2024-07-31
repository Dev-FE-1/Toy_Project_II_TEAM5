import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'

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
      <form onSubmit={hadleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">xxxxxxxxxxxxxxxxxxx</button>
      </form>
    </>
  )
}
