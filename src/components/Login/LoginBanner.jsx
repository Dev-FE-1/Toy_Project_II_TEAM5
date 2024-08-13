import Flex from '@components/shared/Flex'
import styled from 'styled-components'

function LoginBanner() {
  return (
    <LoginThumbnail>
      <FlexLogo>Revive</FlexLogo>
    </LoginThumbnail>
  )
}

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

export default LoginBanner
