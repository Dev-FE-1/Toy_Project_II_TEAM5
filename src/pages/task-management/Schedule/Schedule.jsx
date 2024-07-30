import styled from 'styled-components'
import ScheduleItem from './ScheduleItem'

const scheduleItems = [
  { time: '06.00am', task: 'Spin Class', duration: '45min', color: '#4fd1c5' },
  { time: '08.00am', task: 'Meeting with PaperCup Cafe', duration: '30min', color: 'pink' },
  { time: '12.00am', task: 'Lunch with Esther Wallace', duration: '1hr', color: '#4fd1c5' },
  { time: '02.00pm', task: 'Call babysitter for Saturday', duration: '10min', color: 'orange' },
  { time: '02.30pm', task: 'Conference Call', duration: '1hr 30min', color: 'pink' },
  { time: '03.45pm', task: '강의 복습하기', duration: '2hr', color: '#4fd1c5' },
  { time: '04.05pm', task: '코딩테스트 문제 풀기', duration: '30min', color: '#4fd1c5' },
  { time: '05.45pm', task: 'Pick up kids', duration: '40min', color: '#4fd1c5' },
]

export default function Schedule() {
  return (
    <ScheduleContainer>
      <Title>Today Schedule</Title>
      <ScheduleList>
        {scheduleItems.map((item, index) => (
          <ScheduleItem key={index} item={item} />
        ))}
      </ScheduleList>
      <ButtonContainer>
        <AddButton>일정 추가</AddButton>
      </ButtonContainer>
    </ScheduleContainer>
  )
}

const ScheduleContainer = styled.div`
  width: 400px;
  height: auto;
  padding: 20px 50px;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
`

const Title = styled.h2`
  margin-bottom: 20px;
`

const ScheduleList = styled.div`
  max-height: 510px;
  overflow-y: auto;
  width: 100%;
  padding-right: 10px;
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
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
