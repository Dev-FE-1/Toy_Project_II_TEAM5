import SideNav from '@components/Navbar/SideNav'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Container = styled.div`
  display: flex;
`

const Content = styled.section`
  flex-grow: 1;
  padding: 20px;
  padding-bottom: 0;
`

function Layout() {
  return (
    <Container>
      <SideNav />
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}

export default Layout
