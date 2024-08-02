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
/*
필요한 데이터:
월별 날짜(30,31...)
시작하는 요일 -> state

*/
const Calendar = () => {
  const weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const daysInMonth = 31
  const firstDayOfMonth = weekDay.indexOf('TUE')

  const dummySchedules = {
    2: [
      { type: '출근', time: '09:00', description: '' },
      { type: '퇴근', time: '18:00', description: '' },
    ],
    3: [
      { type: '출근', time: '09:00', description: '' },
      { type: '퇴근', time: '18:00', description: '' },
    ],
    4: [
      { type: '출근', time: '09:00', description: '' },
      { type: '퇴근', time: '18:00', description: '' },
    ],
    5: [
      { type: '출근', time: '09:00', description: '' },
      { type: '퇴근', time: '18:00', description: '' },
    ],
    9: [
      { type: '출근', time: '09:00', description: '' },
      { type: '퇴근', time: '18:00', description: '' },
    ],
    10: [
      { type: '출근', time: '09:00', description: '' },
      { type: '퇴근', time: '18:00', description: '' },
    ],
    11: [{ type: 'Development', description: '' }],
    12: [{ type: 'Edit file', description: '' }],
    13: [{ type: 'Note taking', description: '' }],
  }

  const renderCalendarDays = () => {
    const emptyCells = Array.from({ length: firstDayOfMonth }).map((_, index) => (
      <DayCell key={`empty-${index}`} />
    ))

    const days = Array.from({ length: daysInMonth }).map((_, day) => (
      <DayCell key={day + 1}>
        <DayNumber>{day + 1}</DayNumber>
        <ScheduleList>
          {dummySchedules[day + 1]?.map((schedule, index) => (
            <ScheduleItem key={index} type={schedule.type}>
              {schedule.type} {schedule.time}
            </ScheduleItem>
          ))}
        </ScheduleList>
      </DayCell>
    ))

    return [...emptyCells, ...days]
  }

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <MonthYear>July, 2024</MonthYear>
        <MonthTitle>7월</MonthTitle>
        <MonthSelector>
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
