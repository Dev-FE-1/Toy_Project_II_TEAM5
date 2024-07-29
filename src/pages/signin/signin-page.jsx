import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    // box-sizing: border-box;
    /* outline:1px solid red; */
  }
  
  html, body {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    margin: 0px auto;
  }
`;

const Bold = styled.div`
  font-weight: 900;
`;

const Txt32 = styled.div`
  font-size: 32px;
`;

const Txt14 = styled.div`
  font-size: 14px;
`;

const Txt12 = styled.div`
  font-size: 12px;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%; /* 350px */
`;

const LoginTop = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.span`
  margin: 10px 0;
  color: #4fd1c5;
  font-size: 32px;
`;

const SubTitle = styled.span`
  margin: 10px 0;
  color: #a0aec0;
  font-size: 14px;
`;

const LoginEmail = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const LoginEmailInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 100%;
  height: 50px;
  margin-top: 5px;
  padding-left: 5%;
`;

const LoginPassword = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const LoginPasswordInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 100%;
  height: 50px;
  margin-top: 5px;
  padding-left: 5%;
`;

const LoginToggle = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ToggleCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked + label .toggle-button {
    background-color: #4dd0e1;
  }

  &:checked + label .toggle-button::before {
    transform: translateX(20px);
  }
`;

const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const ToggleButton = styled.span`
  width: 40px;
  height: 20px;
  background-color: #4fd1c5;
  border-radius: 20px;
  position: relative;
  transition: background-color 0.3s;
  margin-right: 8px;

  &::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    top: 1px;
    left: 1px;
    transition: transform 0.3s;
  }
`;

const LoginSubmitBtn = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  border: none;
  background-color: #4fd1c5;
  color: white;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

const LoginThumbnail = styled.div`
  width: 50%;
  height: 900px;
  background-color: #4fd1c5;
  border-radius: 0 0 0 15px;
`;

const TeamNameFooter = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  color: #f0f0f1;
`;

function SigninPage() {
  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <LoginWrapper>
          <LoginTop>
            <MainTitle>Welcome Back</MainTitle>
            <SubTitle>이메일과 비밀번호를 입력해주세요.</SubTitle>
          </LoginTop>
          <LoginEmail>
            <Bold>Email</Bold>
            <div>
              <LoginEmailInput type="text" defaultValue="이메일을 입력해주세요." />
            </div>
          </LoginEmail>
          <LoginPassword>
            <Bold>Password</Bold>
            <div>
              <LoginPasswordInput type="password" defaultValue="12345678" />
            </div>
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
      <TeamNameFooter>강호연  김수민  이동혁  이윤환  최원지</TeamNameFooter>
    </>
  );
}

export default SigninPage;
