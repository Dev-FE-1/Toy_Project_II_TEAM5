import styled from 'styled-components'
import { colors } from '@styles/Colors'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import Flex from '@components/shared/Flex'

const TimeContainer = ({ time, isBtnVisible }) => (
  <TimeDetails>
    <Time>{time}</Time>
    <Btns $isBtnVisible={isBtnVisible}>
      <EditBtn />
      <DeleteBtn />
    </Btns>
  </TimeDetails>
)

const TimeDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  overflow: hidden;
`

const Time = styled.div`
  color: ${colors.gray};
  margin-right: 10px;
`

const Btns = styled(Flex)`
  font-size: 18px;
  margin-right: 20px;
  position: relative;
  right: -100px;
  transition: right 0.2s ease-in-out;
  ${(props) =>
    props.$isBtnVisible &&
    `
      right: 0;
    `}
`

const EditBtn = styled(FaPencilAlt)`
  margin-right: 10px;
  color: ${colors.gray};
  &:hover {
    color: #555;
  }
`

const DeleteBtn = styled(FaTrash)`
  color: ${colors.gray};
  &:hover {
    color: #555;
  }
`

export default TimeContainer
