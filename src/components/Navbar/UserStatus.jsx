import Flex from '@components/shared/Flex'
import { colors } from '@styles/Colors'
import styled from 'styled-components'
import SettingIcon from '@assets/icons/setting.svg'
import AlertIcon from '@assets/icons/alert.svg'
import ProfileIcon from '@assets/icons/profile.svg'
import useUser from '@hooks/useUser'
import useSignout from '@hooks/useSignout'

function UserStatus() {
  const { userProfile } = useUser()
  const { error, signout } = useSignout()
  const handleSignout = async () => {
    if (error) {
      alert(error)
      return
    }
    try {
      await signout()
      alert('로그아웃 됨')
    } catch (e) {
      alert('실패함')
    }
  }
  // console.log('p', userProfile)

  return (
    <Container $justify="space-around">
      <Flex $gap="10px">
        <img src={ProfileIcon} alt="setting" />
        {userProfile && <span>{userProfile.name}</span>}
        <Message onClick={handleSignout}>Logout</Message>
      </Flex>
      <Flex $gap="12px">
        <img src={SettingIcon} alt="setting" />
        <img src={AlertIcon} alt="alert" />
      </Flex>
    </Container>
  )
}

const Container = styled(Flex)`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  padding: 16px 0;
  color: ${colors.gray};
  font-weight: bold;
  border-radius: 14px;
`
const Message = styled.span`
  font-weight: bold;
  margin-left: 32px;
  cursor: pointer;
`

export default UserStatus
