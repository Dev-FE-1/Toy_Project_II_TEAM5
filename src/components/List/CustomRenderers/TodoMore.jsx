import styled from 'styled-components'
import { Link } from 'react-router-dom'
import moreIcon from '@assets/icons/more.svg'

function TodoMore() {
  return (
    <Link to="./task">
      <More src={moreIcon} alt="More" />
    </Link>
  )
}

const More = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default TodoMore
