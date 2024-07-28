import React from 'react'
import styled from 'styled-components'

const scheduleItems = [
  { time: '06.00am', task: 'Spin Class', duration: '45min', color: 'green' },
  { time: '08.00am', task: 'Meeting with PaperCup Cafe', duration: '30min', color: 'yellow' },
  { time: '12.00am', task: 'Lunch with Esther Wallace', duration: '1hr', color: 'green' },
  { time: '02.00pm', task: 'Call babysitter for Saturday', duration: '10min', color: 'green' },
  { time: '02.30pm', task: 'Conference Call', duration: '1hr 30min', color: 'yellow' },
  { time: '03.45pm', task: 'Pick up kids', duration: '30min', color: 'green' },
]

export default function Schedule() {
  return (
    <ScheduleContainer>
      <h1>Today Schedule</h1>
      {scheduleItems.map((item, index) => (
        <ScheduleItem key={index}>
          <TimeContainer>
            <DotContainer>
              <Dot color={item.color}></Dot>
              <Time>{item.time}</Time>
            </DotContainer>
            <Duration>{item.duration}</Duration>
          </TimeContainer>
          <Task>{item.task}</Task>
        </ScheduleItem>
      ))}
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

const ScheduleItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const DotContainer = styled.div`
  display: flex;
  align-items: center;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.color};
`

const Time = styled.div`
  margin-right: 10px;
`

const Task = styled.div`
  font-weight: 500;
  margin-right: 10px;
`

const Duration = styled.div`
  margin-right: 10px;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const AddButton = styled.button`
  font-weight: bold;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4fd1c5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
