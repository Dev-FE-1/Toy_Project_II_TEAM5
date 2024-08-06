import ShadowyBox from '@components/shared/ShadowyBox'
import CalendarDays from './Calendar-Days'
import CalendarHeader from './Calendar-header'
import CalendarNavigation from './Calendar-Navigation'
import styled from 'styled-components'
import { colors } from '@styles/Colors'

const Calendar = () => {
  return (
    <Container>
      <CalendarNavigation />
      <CalendarContents>
        <CalendarHeader />
        <CalendarDays />
      </CalendarContents>
    </Container>
  )
}

const Container = styled(ShadowyBox)`
  padding: 20px 40px;
  padding-bottom: 0;
  background-color: ${colors.white};
  flex-grow: 1;
  width: 70%;
`

const CalendarContents = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid #e9ecef;
`

export default Calendar
