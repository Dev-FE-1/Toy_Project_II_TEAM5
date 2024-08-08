import { CalendarContext } from '@components/Container/calendar-context'
import useAttendance from '@hooks/useAttandance'
import useCalendar from '@hooks/useCalendar'
import { format } from 'date-fns/format'
import { useContext } from 'react'
import styled from 'styled-components'

function ScheduleList({ idx }) {
  const { month, year } = useContext(CalendarContext)
  const { data } = useAttendance({ month })
  const { firstDayIndex } = useCalendar(year, month)

  const hasAttendance = !!data && Object.keys(data).length !== 0
  if (!hasAttendance) return null

  const workOfDay = (day) => data.workTimeTable[day]

  const toTime = (timeStamp) => format(new Date(timeStamp), 'HH:mm')

  return (
    <ScheduleListContainer>
      {workOfDay(idx - firstDayIndex)?.workIn && (
        <ScheduleItem $type="in">
          출근 {toTime(workOfDay(idx - firstDayIndex)?.workIn)}
        </ScheduleItem>
      )}
      {workOfDay(idx - firstDayIndex)?.workOut && (
        <ScheduleItem $type="out">
          퇴근 {toTime(workOfDay(idx - firstDayIndex)?.workOut)}
        </ScheduleItem>
      )}
    </ScheduleListContainer>
  )
}

const ScheduleListContainer = styled.div`
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
  background-color: ${({ $type }) => ($type === 'in' ? '#FFA500' : '#FF6347')};
  color: #fff;
`

export default ScheduleList
