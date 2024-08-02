import { colors } from '@styles/Colors'
import styled from 'styled-components'
import ShadowyBox from '@components/shared/ShadowyBox'

const CalendarWrapper = styled(ShadowyBox)`
  font-family: Arial, sans-serif;
  padding: 20px 50px;
  padding-bottom: 0;
  background-color: ${colors.white};
  flex-grow: 1;
`

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-top: 0;
  position: relative;
  & h2 {
    font-weight: bold;
  }
`

const MonthTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
`

const MonthSelector = styled.select`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 7em;
  width: 100%;
`

const MonthYear = styled.h2`
  padding-top: 30px;
  font-size: 24px;
`

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid #e9ecef;
`

const DayHeader = styled.div`
  padding: 10px;
  border: 1px solid #e9ecef;
`

const DayCell = styled.div`
  min-height: 130px;
  min-width: 130px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e9ecef;
  background-color: #fff;
`

const DayNumber = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 5px;
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

export {
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
}
