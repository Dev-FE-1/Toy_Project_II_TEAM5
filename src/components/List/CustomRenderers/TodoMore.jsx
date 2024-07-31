import styled from 'styled-components'
import { Link } from 'react-router-dom'

function TodoMore({ more }) {
  return (
    <Link to="./tasks">
      <More src={more} alt="More" />
    </Link>
  )
}

const More = styled.img`
  position: absolute;
  left: 50%;
`

export default TodoMore
