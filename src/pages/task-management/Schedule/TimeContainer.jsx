import styled from 'styled-components'
import { colors } from '@styles/Colors'

const TimeContainer = ({ time, duration }) => (
  <TimeDetails>
    <Time>{time}</Time>
    <Duration>{duration}</Duration>
  </TimeDetails>
)

const TimeDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Time = styled.div`
  color: ${colors.gray};
  margin-right: 10px;
`

const Duration = styled.div`
  font-size: 15px;
  color: ${colors.gray};
  margin-right: 10px;
`

export default TimeContainer
