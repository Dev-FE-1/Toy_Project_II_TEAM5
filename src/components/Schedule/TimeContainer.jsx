import styled from 'styled-components'
import { colors } from '@styles/Colors'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import Flex from '@components/shared/Flex'
import { CiClock2 } from 'react-icons/ci'

const TimeContainer = ({ time, isBtnVisible, onEditClick, onDeleteClick }) => (
  <TimeDetails>
    <Time>
      <ClockIcon /> {time}
    </Time>
    <Btns $isBtnVisible={isBtnVisible}>
      <EditBtn
        onClick={(e) => {
          e.stopPropagation()
          onEditClick()
        }}
      />
      <DeleteBtn
        onClick={(e) => {
          e.stopPropagation()
          onDeleteClick()
        }}
      />
    </Btns>
  </TimeDetails>
)

const TimeDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  bottom: 5px;
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

const ClockIcon = styled(CiClock2)`
  position: relative;
  top: 3px;
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
