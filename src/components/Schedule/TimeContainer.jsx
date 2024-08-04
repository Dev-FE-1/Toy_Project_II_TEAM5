import styled from 'styled-components'
import { colors } from '@styles/Colors'

const TimeContainer = ({ time }) => (
  <TimeDetails>
    <Time>{time}</Time>
  </TimeDetails>
)

const TimeDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
`

const Time = styled.div`
  color: ${colors.gray};
  margin-right: 10px;
`

export default TimeContainer
