import styled from 'styled-components'
import LoginForm from '@components/Login/LoginForm'
import LoginBanner from '@components/Login/LoginBanner'
import TeamNameFooter from '@components/Login/TeamNameFooter'

function SigninPage() {
  return (
    <>
      <LoginContainer>
        <LoginForm />
        <LoginBanner />
      </LoginContainer>
      <TeamNameFooter />
    </>
  )
}

const LoginContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  // align-items: center;
  justify-content: space-between;
`

export default SigninPage
