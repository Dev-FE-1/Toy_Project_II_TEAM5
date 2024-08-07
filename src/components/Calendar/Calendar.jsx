import ShadowyBox from '@components/shared/ShadowyBox'
import { colors } from '@styles/Colors'
import styled from 'styled-components'
import CalendarDays from './Calendar-Days'
import CalendarNavigation from './Calendar-Navigation'
import CalendarHeader from './Calendar-header'

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
  overflow: initial;
`

const CalendarContents = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid #e9ecef;
`

export default Calendar
