import { CalendarContext } from '@components/Container/calendar-context'
import useAttendance from '@hooks/useAttandance'
import useCalendar from '@hooks/useCalendar'
import { colors } from '@styles/Colors'
import { format } from 'date-fns/format'
import { useContext } from 'react'
import styled from 'styled-components'

function ScheduleList({ idx }) {
  const { month, year } = useContext(CalendarContext)
  const { data } = useAttendance({ month })
  const { firstDayIndex } = useCalendar(year, month)

  const hasAttendance = !!data && Object.keys(data).length !== 0
  if (!hasAttendance) return <Container />

  const workOfDay = (day) => data.workTimeTable[day]

  const toTime = (timeStamp) => format(new Date(timeStamp), 'HH:mm')

  return (
    <Container>
      {workOfDay(idx - firstDayIndex)?.workIn && (
        <li className="in">출근 {toTime(workOfDay(idx - firstDayIndex)?.workIn)}</li>
      )}
      {workOfDay(idx - firstDayIndex)?.workOut && (
        <li className="out">퇴근 {toTime(workOfDay(idx - firstDayIndex)?.workOut)}</li>
      )}
    </Container>
  )
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
  flex-grow: 1;

  & li {
    padding: 6px 8px;
    max-width: 70%;
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${colors.white};

    &.in {
      background-color: #ffa500;
    }
    &.out {
      background-color: #ff6347;
    }
  }
`

export default ScheduleList
