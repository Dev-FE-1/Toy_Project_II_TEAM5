import { CalendarContext } from '@components/Container/calendar-context'
import useCalendar from '@hooks/useCalendar'
import { colors } from '@styles/Colors'
import isHoliday from '@utils/isHoliday'
import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { useColorMode } from '@chakra-ui/react'

function CalendarDays({ ScheduleList }) {
  const { month, year } = useContext(CalendarContext)
  const { calendarDays } = useCalendar(year, month)
  const { colorMode } = useColorMode()

  const isPrevMonth = (day) => day.getMonth() !== month

  return calendarDays.map((day, idx) => (
    <Container
      key={day}
      $isPrevMonth={isPrevMonth(day)}
      $isHoliday={isHoliday(day)}
      colorMode={colorMode}
    >
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
  border: 1px solid ${({ colorMode }) => (colorMode === 'light' ? '#e9ecef' : colors.gray[600])};
  background-color: ${({ colorMode }) => (colorMode === 'light' ? '#fff' : colors.gray[800])};
  font-size: 16px;

  .day {
    font-weight: bold;
    margin-bottom: 5px;
    ${({ $isHoliday, $isPrevMonth, colorMode }) =>
      $isHoliday
        ? css`
            color: red;
          `
        : $isPrevMonth &&
          css`
            color: ${colorMode === 'light' ? colors.gray : colors.gray[400]};
            font-weight: 400;
          `}
  }

  .holiday {
    margin-left: 6px;
    font-weight: 500;
  }
`

export default CalendarDays
