import styled from 'styled-components'

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
  margin-bottom: 10px;
`

const Time = styled.div`
  color: #848484;
  margin-right: 10px;
`

const Duration = styled.div`
  font-size: 15px;
  color: #848484;
  margin-right: 10px;
`

export default TimeContainer
