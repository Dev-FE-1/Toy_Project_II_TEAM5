import { CalendarContext } from '@components/Container/calendar-context'
import useCalendar from '@hooks/useCalendar'
import { colors } from '@styles/Colors'
import isHoliday from '@utils/isHoliday'
import { useContext } from 'react'
import styled, { css } from 'styled-components'

function CalendarDays({ onSelectDay }) {
  const { month, year } = useContext(CalendarContext)
  const { calendarDays } = useCalendar(year, month)

  const isPrevMonth = (day) => day.getMonth() !== month

  return calendarDays.map((day) => (
    <Container
      key={day}
      $isPrevMonth={isPrevMonth(day)}
      $isHoliday={isHoliday(day)}
      onClick={() => onSelectDay(day)}
    >
      <span className="day">
        {day.getDate()}
        <span className="holiday">{isHoliday(day)?.name}</span>
      </span>
      {/* {!isHoliday(day) && <ScheduleList selectedDay={selectedDay} />} */}
    </Container>
  ))
}

const Container = styled.div`
  min-height: 130px;
  min-width: 130px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e9ecef;
  background-color: #fff;
  font-size: 16px;

  .day {
    font-weight: bold;
    margin-bottom: 5px;
    ${({ $isHoliday, $isPrevMonth }) =>
      $isHoliday
        ? css`
            color: red;
          `
        : $isPrevMonth &&
          css`
            color: ${colors.gray};
            font-weight: 400;
          `}
  }

  .holiday {
    margin-left: 6px;
    font-weight: 500;
  }
`

export default CalendarDays
