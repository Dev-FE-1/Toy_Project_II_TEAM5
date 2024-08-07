import { CalendarContext } from '@components/Container/calendar-context'
import Loading from '@components/shared/Loading'
import useAttendance from '@hooks/useAttandance'
import useCalendar from '@hooks/useCalendar'
import { colors } from '@styles/Colors'
import isHoliday from '@utils/isHoliday'
import { format } from 'date-fns/format'
import { useContext } from 'react'
import styled, { css } from 'styled-components'

function CalendarDays() {
  const { month, year } = useContext(CalendarContext)
  const { calendarDays, firstDayIndex } = useCalendar(year, month)

  const { data, status } = useAttendance({ month })

  const hasAttendance = !!data && Object.keys(data).length !== 0
  const workOfDay = (day) => data.workTimeTable[day]

  const isPrevMonth = (day) => day.getMonth() !== month

  const toTime = (timeStamp) => format(new Date(timeStamp), 'HH:mm')

  if (status === 'pending') return <Loading />

  return calendarDays.map((day, idx) => (
    <Container key={day} $isPrevMonth={isPrevMonth(day)} $isHoliday={isHoliday(day)}>
      <span className="day">
        {day.getDate()}
        <span className="holiday">{isHoliday(day)?.name}</span>
      </span>
      {hasAttendance && !isHoliday(day) && (
        <ScheduleList>
          {workOfDay(idx - firstDayIndex)?.workIn && (
            <ScheduleItem type="출근">
              출근 {toTime(workOfDay(idx - firstDayIndex)?.workIn)}
            </ScheduleItem>
          )}
          {workOfDay(idx - firstDayIndex)?.workOut && (
            <ScheduleItem type="퇴근">
              퇴근 {toTime(workOfDay(idx - firstDayIndex)?.workOut)}
            </ScheduleItem>
          )}
        </ScheduleList>
      )}
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
