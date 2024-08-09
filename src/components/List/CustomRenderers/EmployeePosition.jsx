import styled from 'styled-components'
import { colors } from '@styles/Colors'

function EmployeePosition({ item }) {
  const { position1, position2 } = item
  return (
    <div>
      <p>{position1}</p>
      <EmployeePosition2>{position2}</EmployeePosition2>
    </div>
  )
}

const EmployeePosition2 = styled.span`
  color: ${colors.gray};
  font-size: 12px;
`

export default EmployeePosition
