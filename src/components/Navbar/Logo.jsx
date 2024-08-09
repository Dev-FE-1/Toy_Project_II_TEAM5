import Flex from '@components/shared/Flex'
import logo from '@assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/">
      <Flex $justify="flex-start">
        <ImageWrapper>
          <img src={logo} alt="로고" />
        </ImageWrapper>
        <Name>Revive</Name>
      </Flex>
    </Link>
  )
}

const ImageWrapper = styled.div`
  width: 70px;
  display: flex;

  & img {
    display: block;
  }
`

const Name = styled.span`
  font-weight: bold;
  font-size: 24px;
`

export default Logo
