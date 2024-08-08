import Flex from '@components/shared/Flex'
import { colors } from '@styles/Colors'
import styled from 'styled-components'
import SettingIcon from '@assets/icons/setting.svg'
import AlertIcon from '@assets/icons/alert.svg'
import ProfileIcon from '@assets/icons/profile.svg'
// import { useNavigate } from 'react-router-dom'
// import { auth } from '/src/firebase/firebaseConfig'
import useHandleLogout from '@hooks/useHandleLogout'

function UserStatus() {
  const handleLogout = useHandleLogout()

  return (
    <Container $gap="20px" $justify="flex-start">
      <Flex $gap="10px">
        <img src={ProfileIcon} alt="setting" />
        <Message onClick={handleLogout}>Logout</Message>
      </Flex>
      <img src={SettingIcon} alt="setting" />
      <img src={AlertIcon} alt="alert" />
    </Container>
  )
}

const Container = styled(Flex)`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  padding: 16px 0;
  color: ${colors.white};
  font-weight: bold;
  border-radius: 14px;
`
const Message = styled.span`
  color: ${colors.gray};
  font-weight: bold;
  cursor: pointer;
`

export default UserStatus
