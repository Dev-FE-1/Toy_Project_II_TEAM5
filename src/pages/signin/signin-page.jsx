import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from '@components/shared/Flex.jsx'
//firebase
import { auth } from '/src/firebase/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Bold = styled.div`
  // font-weight: 700;
`

// const Txt32 = styled.div`
//   font-size: 32px;
// `

// const Txt14 = styled.div`
//   font-size: 14px;
// `

// const Txt12 = styled.div`
//   font-size: 12px;
// `

const LoginContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  // align-items: center;
  justify-content: space-between;
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 400px;
  margin: auto;
`

// const LoginTop = styled.div`
//   display: flex;
//   flex-direction: column;
// `

const MainTitle = styled.span`
  margin: 10px 0;
  color: #4fd1c5;
  font-size: 36px;
  font-weight: 900;
`
// function Main({ color }) {
//   return (
//     <>
//       <MainTitle color={color}>
//         <Bold>Welcome Back</Bold>
//       </MainTitle>
//     </>
//   )
// }

const SubTitle = styled.span`
  margin: 10px 0;
  color: #a0aec0;
  font-size: 14px;
  font-weight: 700;
`

// const LoginEmail = styled.div`
//   margin: 15px 0;
//   display: flex;
//   flex-direction: column;
// `

const InputSection = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: var(--black);
`

const LoginInput = styled.input`
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 100%;
  height: 50px;
  margin-top: 5px;
  padding-left: 15px;
`

// const LoginPassword = styled.div`
//   margin: 15px 0;
//   display: flex;
//   flex-direction: column;
// `

// const LoginPasswordInput = styled.input`
//   border: 1px solid lightgray;
//   border-radius: 15px;
//   width: 100%;
//   height: 50px;
//   margin-top: 5px;
//   padding-left: 5%;
// `

const LoginToggle = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`
// const ColoredLoginToggle = styled(LoginToggle)`
//   color: #fff;
// `

const ToggleCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked + label .toggle-button {
    background-color: var(--primary);
  }

  &:checked + label .toggle-button::before {
    transform: translateX(20px);
  }
`

const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  color: var(--black);
`

const ToggleButton = styled.span`
  width: 40px;
  height: 20px;
  background-color: #f0f0f1;
  border-radius: 20px;
  position: relative;
  transition: background-color 0.3s;
  margin-right: 8px;

  &::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    top: 1px;
    left: 1px;
    transition: transform 0.3s;
  }
`

const LoginSubmitBtn = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  border: none;
  background-color: var(--primary);
  color: white;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`

const LoginThumbnail = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--primary);
  border-radius: 0 0 0 15px;
  background-image: url(/src/assets/icons/wave-left.svg), url(/src/assets/icons/wave-right.svg);
  background-repeat: no-repeat, no-repeat;
  background-position: left, right;
`
const FlexLogo = styled(Flex)`
  height: 100%;
  color: var(--white);
  font-size: 64px;
  font-weight: 900;

  &::before {
    content: '';
    display: block;
    background-image: url('/src/assets/logo2.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 120px;
    height: 120px;
  }
`
const TeamNameFooter = styled.footer`
  height: 10vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  color: rgba(160, 174, 192, 0.3);
  padding-right: 50px;
`

function LoginInputField({ title, type, placeholder, value, onChange }) {
  return (
    <>
      <Bold>
        <label>{title}</label>
      </Bold>
      <div>
        <LoginInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </>
  )
}

function SigninPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const curUser = await signInWithEmailAndPassword(auth, email, password)
      console.log('login successed')
      localStorage.setItem('user', JSON.stringify(curUser.user))
      navigate('/')
    } catch (error) {
      setError('유효한 아이디, 비밀번호를 입력해주세요!')
      setTimeout(() => {
        setError(null)
      }, 5000)
      console.log('login failed')
    }
  }

  function setEmailValue(e) {
    setEmail(e.target.value)
  }

  function setPasswordValue(e) {
    setPassword(e.target.value)
  }
  function Alert({ error }) {
    return <div style={{ color: 'red' }}>{error}</div>
  }
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <Flex $align="flex-start" $direction="column">
            <MainTitle>Welcome Back</MainTitle>
            <SubTitle>이메일과 비밀번호를 입력해주세요.</SubTitle>
          </Flex>
          <InputSection>
            <LoginInputField
              title="Email"
              type="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={setEmailValue}
            />
          </InputSection>
          <InputSection>
            <LoginInputField
              title="Password"
              type="password"
              placeholder="패스워드를 입력해주세요."
              value={password}
              onChange={setPasswordValue}
            />
          </InputSection>
          {error && <Alert error={error} />}
          <LoginToggle>
            <ToggleCheckbox id="toggle" />
            <ToggleLabel htmlFor="toggle">
              <ToggleButton className="toggle-button" />
              이메일 기억하기
            </ToggleLabel>
          </LoginToggle>
          <LoginSubmitBtn onClick={handleLogin}>로그인</LoginSubmitBtn>
        </LoginWrapper>
        <LoginThumbnail>
          <FlexLogo>Revive</FlexLogo>
        </LoginThumbnail>
      </LoginContainer>
      <TeamNameFooter>
        @2024, Made with FastCampus by 강호연 김수민 이동혁 이윤환 최원지
      </TeamNameFooter>
    </>
  )
}

export default SigninPage
