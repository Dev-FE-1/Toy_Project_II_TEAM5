import Horizon from '@components/shared/Horizon'
import styled from 'styled-components'
import Logo from './Logo'
import NavItems from './NavItems'
import Help from './Help'
import Weather from './Weather'
import UserStatus from './UserStatus'
import { useColorMode } from '@chakra-ui/react'

function SideNav() {
  const { colorMode } = useColorMode()
  return (
    <Nav $colorMode={colorMode}>
      <Logo />
      <Horizon />
      <NavItems />
      <Help />
      <Weather />
      <UserStatus />
    </Nav>
  )
}

const Nav = styled.nav`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: ${({ $colorMode }) => ($colorMode === 'light' ? '#f8f9fa' : '#2D3748')};
  color: ${({ $colorMode }) => ($colorMode === 'light' ? '#000' : '#fff')};
`
export default SideNav
