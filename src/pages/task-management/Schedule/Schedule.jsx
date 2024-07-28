import styled from 'styled-components'

const scheduleItems = [
  { time: '06.00am', task: 'Spin Class', duration: '45min', color: '#4fd1c5' },
  { time: '08.00am', task: 'Meeting with PaperCup Cafe', duration: '30min', color: 'pink' },
  { time: '12.00am', task: 'Lunch with Esther Wallace', duration: '1hr', color: '#4fd1c5' },
  { time: '02.00pm', task: 'Call babysitter for Saturday', duration: '10min', color: 'orange' },
  { time: '02.30pm', task: 'Conference Call', duration: '1hr 30min', color: '#760000' },
  { time: '03.45pm', task: 'Pick up kids', duration: '30min', color: '#4fd1c5' },
  { time: '04.45pm', task: 'Pick up kids', duration: '30min', color: '#4fd1c5' },
  { time: '05.45pm', task: 'Pick up kids', duration: '30min', color: '#4fd1c5' },
]

export default function Schedule() {
  return (
    <ScheduleContainer>
      <h1>Today Schedule</h1>
      <ScheduleList>
        {scheduleItems.map((item, index) => (
          <ScheduleItem key={index}>
            <DotLineContainer>
              <Dot color={item.color}></Dot>
              <Line />
            </DotLineContainer>
            <ItemDetails>
              <TimeContainer>
                <Time>{item.time}</Time>
                <Duration>{item.duration}</Duration>
              </TimeContainer>
              <Task>{item.task}</Task>
            </ItemDetails>
          </ScheduleItem>
        ))}
      </ScheduleList>
      <ButtonContainer>
        <AddButton>일정 추가</AddButton>
      </ButtonContainer>
    </ScheduleContainer>
  )
}

const ScheduleContainer = styled.div`
  width: 510px;
  height: auto;
  padding: 20px 50px;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
`

const ScheduleList = styled.div`
  max-height: 510px;
  overflow-y: auto;
  width: 100%;
  padding-right: 10px;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`

const ScheduleItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* margin: 10px 0; */
  position: relative;
  cursor: pointer;
`

const DotLineContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  position: absolute;
  top: 10px;
`

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const TimeContainer = styled.div`
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
  color: #848484;
  margin-right: 10px;
`

const Task = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 20px;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const AddButton = styled.button`
  font-weight: 500;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4fd1c5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
