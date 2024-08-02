import { colors } from '@styles/Colors'
import styled from 'styled-components'

function Header({ header }) {
  return (
    <HeaderBox>
      <h1>{header}</h1>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  width: 100%;
  height: 70px;
  padding: 25px;
  padding-right: 0;
  background: ${colors.white};
  border-radius: 15px;
  font-size: 20px;
  font-weight: 700;
`

export default Header
