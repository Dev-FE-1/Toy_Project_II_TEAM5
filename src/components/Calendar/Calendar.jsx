import {
  CalendarWrapper,
  CalendarHeader,
  MonthTitle,
  MonthSelector,
  MonthYear,
  CalendarGrid,
  DayHeader,
  DayCell,
  DayNumber,
  ScheduleList,
  ScheduleItem,
} from './Calendar.styled'

const Calendar = ({ dayNum, firstDay, workTimeTable, selectedMonth, onMonthChange }) => {
  const weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const daysInMonth = dayNum
  const firstDayOfMonth = weekDay.indexOf(firstDay)

  const renderCalendarDays = () => {
    const emptyCells = Array.from({ length: firstDayOfMonth }).map((_, index) => (
      <DayCell key={`empty-${index}`} />
    ))

    const days = Array.from({ length: daysInMonth }).map((_, day) => {
      const currentDate = day + 1

      const daySchedule = workTimeTable[currentDate] || {}

      return (
        <DayCell key={currentDate}>
          <DayNumber>{currentDate}</DayNumber>
          <ScheduleList>
            {daySchedule.workIn && (
              <ScheduleItem type="출근">출근 {daySchedule.workIn}</ScheduleItem>
            )}
            {daySchedule.workOut && (
              <ScheduleItem type="퇴근">퇴근 {daySchedule.workOut}</ScheduleItem>
            )}
          </ScheduleList>
        </DayCell>
      )
    })

    return [...emptyCells, ...days]
  }

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <MonthYear>July, 2024</MonthYear>
        <MonthTitle>{selectedMonth}월</MonthTitle>
        <MonthSelector value={selectedMonth} onChange={onMonthChange}>
          {Array.from({ length: 12 }).map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}월
            </option>
          ))}
        </MonthSelector>
      </CalendarHeader>
      <CalendarGrid>
        {weekDay.map((day) => (
          <DayHeader key={day}>{day}</DayHeader>
        ))}
        {renderCalendarDays()}
      </CalendarGrid>
    </CalendarWrapper>
  )
}

export default Calendar
