import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/signin">로그인</Link>
        </li>
        <li>
          <Link to="/salary">급여관리</Link>
        </li>
        <li>
          <Link to="/task">업무관리</Link>
        </li>
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;

  & ul {
    width: fit-content;
    list-style: none;
    display: flex;
    gap: 30px;
    & a {
      text-decoration: none;
    }
  }
`
export default Navbar
