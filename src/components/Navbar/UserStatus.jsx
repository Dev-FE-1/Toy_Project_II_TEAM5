import ProfileIcon from '@assets/icons/profile.svg'
import SettingIcon from '@assets/icons/setting.svg'
import { colors } from '@styles/Colors'
import styled from 'styled-components'
import { Button, useColorMode } from '@chakra-ui/react'
import useLogout from '@hooks/useLogout'
import Flex from '@components/shared/Flex'

function UserStatus() {
  const { colorMode, toggleColorMode } = useColorMode()
  const handleLogout = useLogout()

  return (
    <Container $gap="20px" $justify="flex-start">
      <Flex $gap="10px">
        <img src={ProfileIcon} alt="setting" />
        <Message onClick={handleLogout}>Logout</Message>
      </Flex>
      <img src={SettingIcon} alt="setting" />
      <Button onClick={toggleColorMode}>{colorMode === 'light' ? '🌑' : '🌕'}</Button>
    </Container>
  )
}

const Container = styled(Flex)`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  padding: 16px 0;
  font-weight: bold;
  border-radius: 14px;
`
const Message = styled.button`
  color: ${colors.gray};
  font-weight: bold;
  cursor: pointer;
`

export default UserStatus
