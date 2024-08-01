import styled, { css } from 'styled-components'
import { colors } from '@styles/Colors'
import Flex from '@components/shared/Flex'

const EmployeeStatus = ({ status }) => {
  return (
    <ColoredStatus $justify="center" $status={status}>
      {status}
    </ColoredStatus>
  )
}

const ColoredStatus = styled(Flex)`
  width: 80px;
  color: ${colors.white};
  padding: 10px;
  font-weight: 700;
  border-radius: 8px;
  position: relative;

  ${(props) =>
    props.$status === 'Online' &&
    css`
      background: #48bb78;
    `}
  ${(props) =>
    props.$status === 'Offline' &&
    css`
      background: #cbd5e0;
    `}
`

export default EmployeeStatus
