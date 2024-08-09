import { useColorMode } from '@chakra-ui/react'
import { colors } from '@styles/Colors'
import styled from 'styled-components'

function Header({ header }) {
  const { colorMode } = useColorMode()

  return (
    <HeaderBox $colorMode={colorMode}>
      <h1>{header}</h1>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 25px;
  background-color: ${({ $colorMode }) =>
    $colorMode === 'light' ? colors.white : colors.gray[800]};
  border-radius: 15px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ $colorMode }) => ($colorMode === 'light' ? colors.black : colors.white)};
  border: ${({ $colorMode }) => ($colorMode === 'dark' ? '1px solid white' : 'none')};
`

export default Header
