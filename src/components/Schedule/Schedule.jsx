import styled from 'styled-components'
import ScheduleItem from './ScheduleItem'
import ShadowyBox from '@components/shared/ShadowyBox'
import { colors } from '@styles/Colors'
import StyledButton from '@components/shared/Button'
import { scrollbarStyle } from '@styles/variables'

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
        <StyledButton
          text="일정 추가"
          backgroundColor={colors.primary_200}
          hoverColor={colors.primary_300}
          margin="30px 0 0 0"
        />
      </ButtonContainer>
    </ScheduleContainer>
  )
}

const ScheduleContainer = styled(ShadowyBox)`
  display: flex;
  flex-direction: column;
  padding: 45px;
  align-items: flex-start;
  width: 32%;
  margin-bottom: 10px;
  ${scrollbarStyle}
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`

const ScheduleList = styled.div`
  max-height: 570px;
  overflow-y: auto;
  width: 100%;
  padding-right: 10px;
  ${scrollbarStyle}
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
