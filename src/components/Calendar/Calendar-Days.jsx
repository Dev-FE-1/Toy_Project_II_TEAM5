import { CalendarContext } from '@components/Container/calendar-context'
import useCalendar from '@hooks/useCalendar'
import { colors } from '@styles/Colors'
import isHoliday from '@utils/isHoliday'
import { useContext } from 'react'
import styled, { css } from 'styled-components'

function CalendarDays({ ScheduleList }) {
  const { month, year } = useContext(CalendarContext)
  const { calendarDays } = useCalendar(year, month)

  const isPrevMonth = (day) => day.getMonth() !== month

  return calendarDays.map((day, idx) => (
    <Container key={day} $isPrevMonth={isPrevMonth(day)} $isHoliday={isHoliday(day)}>
      <span className="day">
        {day.getDate()}
        <span className="holiday">{isHoliday(day)?.name}</span>
      </span>
      {!isHoliday(day) && <ScheduleList idx={idx} />}
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

  .day {
    font-size: 1.5em;
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
    font-size: 20px;
    font-weight: 500;
  }
`

export default CalendarDays
