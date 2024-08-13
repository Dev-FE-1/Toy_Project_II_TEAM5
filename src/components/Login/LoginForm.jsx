import styled from 'styled-components'
import InputField from '@components/shared/InputField.jsx'
import useLogin from '@hooks/useLogin'
import Flex from '@components/shared/Flex.jsx'

export default function LoginForm() {
  const {
    email,
    setEmailValue,
    password,
    setPasswordValue,
    error,
    isChecked,
    handleLogin,
    handleIsToggleChecked,
  } = useLogin()

  return (
    <LoginWrapper>
      <Flex $align="flex-start" $direction="column">
        <MainTitle>Welcome Back</MainTitle>
        <SubTitle>이메일과 비밀번호를 입력해주세요.</SubTitle>
      </Flex>
      <InputField
        title="Email"
        type="email"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={setEmailValue}
      />
      <InputField
        title="Password"
        type="password"
        placeholder="패스워드를 입력해주세요."
        value={password}
        onChange={setPasswordValue}
      />
      <Alert $visible={error}>{error}</Alert>
      <LoginToggle>
        <ToggleCheckbox id="toggle" checked={isChecked} onChange={handleIsToggleChecked} />
        <ToggleLabel htmlFor="toggle">
          <ToggleButton className="toggle-button" />
          이메일 기억하기
        </ToggleLabel>
      </LoginToggle>
      <LoginSubmitBtn onClick={handleLogin} disabled={!email && !password}>
        로그인
      </LoginSubmitBtn>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 400px;
  margin: auto;
`

const MainTitle = styled.span`
  margin: 10px 0;
  color: #4fd1c5;
  font-size: 36px;
  font-weight: 900;
`

const SubTitle = styled.span`
  margin: 10px 0;
  color: #a0aec0;
  font-size: 14px;
  font-weight: 700;
`

const Alert = styled.div`
  height: 20px;
  color: red;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
`

const LoginToggle = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

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
  transition: transform 0.1s;

  &:hover {
    background-color: gray;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    background-color: #d3d3d3;
    transform: none;
  }
`
