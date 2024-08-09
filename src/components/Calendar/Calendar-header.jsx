import useCalendar from '@hooks/useCalendar'
import styled from 'styled-components'

function CalendarHeader() {
  const { calendarHeader } = useCalendar()

  return (
    <>
      {calendarHeader.map((day) => (
        <DayHeader key={day}>{day}</DayHeader>
      ))}
    </>
  )
}

const DayHeader = styled.div`
  padding: 10px;
  border: 1px solid #e9ecef;
`

export default CalendarHeader
