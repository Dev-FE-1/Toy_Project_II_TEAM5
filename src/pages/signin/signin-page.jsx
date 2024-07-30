// import { Headding } from '@pages/home/home-page'
// import React from 'react'
import styled from 'styled-components'

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//   }

//   html, body {
//     width: 100%;
//     max-width: 1280px;
//     height: 100%;
//     margin: 0px auto;
// }`

const Bold = styled.div`
  font-weight: 700;
`

const Txt32 = styled.div`
  font-size: 32px;
`

const Txt14 = styled.div`
  font-size: 14px;
`

const Txt12 = styled.div`
  font-size: 12px;
`

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

const LoginTop = styled.div`
  display: flex;
  flex-direction: column;
`

const MainTitle = styled.span`
  margin: 10px 0;
  color: #4fd1c5;
  font-size: 32px;
`

const SubTitle = styled.span`
  margin: 10px 0;
  color: #a0aec0;
  font-size: 14px;
`

const LoginEmail = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`

const LoginInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 100%;
  height: 50px;
  margin-top: 5px;
  padding-left: 5%;
`

const LoginPassword = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`

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
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`

const LoginThumbnail = styled.div`
  width: 50%;
  height: 900px;
  background-color: var(--primary);
  border-radius: 0 0 0 15px;
`

const TeamNameFooter = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  color: #f0f0f1;
`
function LoginInputField({ title, type, placeholder }) {
  return (
    <>
      <Bold>{title}</Bold>
      <div>
        <LoginInput type={type} placeholder={placeholder} />
      </div>
    </>
  )
}

function SigninPage() {
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginTop>
            <MainTitle>
              <Bold>
                <Txt32>Welcome Back</Txt32>
              </Bold>
            </MainTitle>
            <SubTitle>
              <Bold>
                <Txt14>이메일과 비밀번호를 입력해주세요.</Txt14>
              </Bold>
            </SubTitle>
          </LoginTop>
          <LoginEmail>
            <LoginInputField title="Email" type="email" placeholder="이메일을 입력해주세요." />
          </LoginEmail>
          <LoginPassword>
            <LoginInputField
              title="Password"
              type="password"
              placeholder="패스워드를 입력해주세요."
            />
          </LoginPassword>
          <LoginToggle>
            <ToggleCheckbox id="toggle" />
            <ToggleLabel htmlFor="toggle">
              <ToggleButton className="toggle-button" />
              <Txt12>이메일 기억하기</Txt12>
            </ToggleLabel>
          </LoginToggle>
          <LoginSubmitBtn>로그인</LoginSubmitBtn>
        </LoginWrapper>
        <LoginThumbnail />
      </LoginContainer>
      <TeamNameFooter>강호연 김수민 이동혁 이윤환 최원지</TeamNameFooter>
    </>
  )
}

export default SigninPage
