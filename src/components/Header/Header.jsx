import Flex from '@components/shared/Flex'
import styled from 'styled-components'

function Header({ header }) {
  return (
    <HeaderBox $justify="flex-start">
      <h1>{header}</h1>
    </HeaderBox>
  )
}

const HeaderBox = styled(Flex)`
  width: 100%;
  height: 70px;
  background: #fff;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 700;
  padding-left: 25px;
`

export default Header
