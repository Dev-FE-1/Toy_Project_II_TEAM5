import Horizon from '@components/shared/Horizon'
import styled from 'styled-components'
import Logo from './Logo'
import NavItems from './NavItems'
import Help from './Help'
import Weather from './Weather'
import UserStatus from './UserStatus'

function SideNav() {
  return (
    <Nav>
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
  background-color: #f8f9fa;
`
export default SideNav
