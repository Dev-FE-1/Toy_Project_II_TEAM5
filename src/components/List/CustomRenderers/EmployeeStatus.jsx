import styled, { css } from 'styled-components'
import { colors } from '@styles/Colors'
import Flex from '@components/shared/Flex'

const EmployeeStatus = ({ item }) => {
  const { isOnline } = item

  return (
    <ColoredStatus $justify="center" $isOnline={isOnline}>
      {isOnline ? 'Online' : 'Offline'}
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
    props.$isOnline
      ? css`
          background: #48bb78;
        `
      : css`
          background: #cbd5e0;
        `}
`

export default EmployeeStatus
