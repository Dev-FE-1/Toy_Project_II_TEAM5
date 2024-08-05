import { CalendarContext } from '@components/Container/calendar-context'
import useCalendar from '@hooks/useCalendar'
import { colors } from '@styles/Colors'
import { useContext } from 'react'
import styled, { css } from 'styled-components'

function CalendarDays() {
  const { month, year } = useContext(CalendarContext)

  const { calendarDays } = useCalendar(year, month)
  // console.log('d', calendarDays)

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

  const isLastMonth = (day) => day.getMonth() !== month

  return calendarDays.map((day) => (
    <Container key={day} $isLastMonth={isLastMonth(day)}>
      <span className="day">{day.getDate()}</span>
      <ScheduleList>
        {dummySchedules[day.getDate()]?.map((schedule, index) => (
          <ScheduleItem key={index} type={schedule.type}>
            {schedule.type} {schedule.time}
          </ScheduleItem>
        ))}
      </ScheduleList>
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
    ${({ $isLastMonth }) =>
      $isLastMonth &&
      css`
        color: ${colors.gray};
        font-weight: 400;
      `}
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
