import ShadowyBox from '@components/shared/ShadowyBox'
import { colors } from '@styles/Colors'
import styled from 'styled-components'
import CalendarDays from './Calendar-Days'
import CalendarNavigation from './Calendar-Navigation'
import CalendarHeader from './Calendar-header'
import { useColorMode } from '@chakra-ui/react'

const Calendar = ({ ScheduleList }) => {
  const { colorMode } = useColorMode()

  return (
    <Container colorMode={colorMode}>
      <CalendarNavigation />
      <CalendarContents colorMode={colorMode}>
        <CalendarHeader />
        <CalendarDays ScheduleList={ScheduleList} />
      </CalendarContents>
    </Container>
  )
}

const Container = styled(ShadowyBox)`
  /* flex-grow: 1; */
  width: 70%;
  overflow: initial;
  position: relative;
  height: auto;
`

const CalendarContents = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid ${({ colorMode }) => (colorMode === 'light' ? '#e9ecef' : colors.gray[600])};
  height: 90%;
`

export default Calendar
