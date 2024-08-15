import Flex from '@components/shared/Flex'
import styled from 'styled-components'
import bannerLogo from '@assets/logo2.png'
import bannerWaveLeft from '@assets/icons/wave-left.svg'
import bannerWaveRight from '@assets/icons/wave-right.svg'

function LoginBanner() {
  return (
    <LoginThumbnail $waveLeft={bannerWaveLeft} $waveRight={bannerWaveRight}>
      <FlexLogo $logo={bannerLogo}>Revive</FlexLogo>
    </LoginThumbnail>
  )
}

const LoginThumbnail = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--primary);
  border-radius: 0 0 0 15px;
  background-image: url(${(props) => props.$waveLeft}), url(${(props) => props.$waveRight});
  background-repeat: no-repeat;
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
    background-image: url(${(props) => props.$logo});
    background-size: contain;
    background-repeat: no-repeat;
    width: 120px;
    height: 120px;
  }
`

export default LoginBanner
