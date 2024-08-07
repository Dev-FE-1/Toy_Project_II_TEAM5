import { CalendarContext } from '@components/Container/calendar-context'
import useAttendance from '@hooks/useAttandance'
import useCalendar from '@hooks/useCalendar'
import { colors } from '@styles/Colors'
import isHoliday from '@utils/isHoliday'
import { useContext } from 'react'
import styled, { css } from 'styled-components'

function CalendarDays() {
  const { month, year } = useContext(CalendarContext)

  const { calendarDays } = useCalendar(year, month)
  const firstDay = calendarDays.findIndex((x) => x.getMonth() === month)

  const { processedData } = useAttendance({ month })

  // const workOfDay = (day) => workList?.workTimeTable[day]

  // console.log('w', workOfDay(0))
  console.log('d', processedData)
  // console.log('a', firstDay)

  const isLastMonth = (day) => day.getMonth() !== month
  // const holidayName = (day) => HOLIDAYS.find((holiday) => holiday.date)

  return calendarDays.map((day, idx) => (
    <Container key={day} $isLastMonth={isLastMonth(day)} $isHoliday={isHoliday(day)}>
      <span className="day">
        {day.getDate()}
        <span className="holiday">{isHoliday(day)?.name}</span>
      </span>
      {/* <ScheduleList>
        {workOfDay(idx - firstDay)?.workIn && (
          <ScheduleItem type="출근">출근 {workOfDay(idx - firstDay)?.workIn}</ScheduleItem>
        )}
        {workOfDay(idx - firstDay)?.workOut && (
          <ScheduleItem type="퇴근">퇴근 {workOfDay(idx - firstDay)?.workOut}</ScheduleItem>
        )}
      </ScheduleList> */}
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
    ${({ $isHoliday, $isLastMonth }) =>
      $isHoliday
        ? css`
            color: red;
          `
        : $isLastMonth &&
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

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
  flex-grow: 1;
`
const ScheduleItem = styled.div`
  padding: 6px 8px;
  max-width: 70%;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: ${(props) => {
    switch (props.type) {
      case '출근':
        return '#FFA500'
      case '퇴근':
        return '#FF6347'
      case 'Development':
        return '#4682B4'
      case 'Edit file':
        return '#9370DB'
      case 'Note taking':
        return '#A9A9A9'
      default:
        return '#ccc'
    }
  }};
  color: #fff;
`
export default CalendarDays
