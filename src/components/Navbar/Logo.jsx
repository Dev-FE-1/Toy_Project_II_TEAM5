import Flex from '@components/shared/Flex'
import logo from '@assets/logo.png'
import styled from 'styled-components'

function Logo() {
  return (
    <Flex $justify="flex-start">
      <ImageWrapper>
        <img src={logo} alt="로고" />
      </ImageWrapper>
      <Name>Revive</Name>
    </Flex>
  )
}

const ImageWrapper = styled.div`
  width: 70px;

  & img {
    display: block;
  }
`

const Name = styled.span`
  font-weight: bold;
  font-size: 24px;
`

export default Logo
