import styled from 'styled-components'
import { DIVISION_COLORS } from '@constants/Task'

function TodoChecklist({ item }) {
  const { title, division } = item
  return (
    <>
      <ColoredCDivision $division={division}></ColoredCDivision>
      <span>{title}</span>
    </>
  )
}

const ColoredCDivision = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  background: ${({ $division }) => DIVISION_COLORS[$division] || 'transparent'};
`

export default TodoChecklist
