import styled from 'styled-components'
import TimeContainer from './TimeContainer'

const ScheduleItem = ({ item }) => (
  <ItemContainer>
    <DotLineContainer>
      <Dot color={item.color} />
      <Line />
    </DotLineContainer>
    <ItemDetails>
      <TimeContainer time={item.time} duration={item.duration} />
      <Task>{item.task}</Task>
    </ItemDetails>
  </ItemContainer>
)

const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

const DotLineContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  z-index: 1;
`

const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: #d2d2d2;
`

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const Task = styled.div`
  font-size: 18px;
  padding-bottom: 25px;
`

export default ScheduleItem
