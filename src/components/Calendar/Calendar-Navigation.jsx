import { CalendarContext } from '@components/Container/calendar-context'
import Flex from '@components/shared/Flex'
import { format } from 'date-fns/format'
import { useContext } from 'react'
import styled from 'styled-components'
import MonthSelector from './Month-Selector'

function CalendarNavigation() {
  const { month, setMonth, year, setYear } = useContext(CalendarContext)

  const displayed = new Date(year, month)
  const handleNextMonth = () => {
    setMonth((prevMonth) => (prevMonth + 1) % 12)
    if (month === 11) setYear(year + 1)
  }

  const handlePreviousMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1))
    if (month === 0) setYear(year - 1)
  }

  return (
    <>
      <Month>
        <button onClick={handlePreviousMonth}>{'<'}</button>
        <h2>{month + 1} 월</h2>
        <button onClick={handleNextMonth}>{'>'}</button>
      </Month>
      <SubTools>
        <span>{`${format(displayed, 'MMMM')}, ${year} `}</span>
        <MonthSelector />
      </SubTools>
    </>
  )
}

const Month = styled(Flex)`
  gap: 20px;
  font-size: 24px;
  margin-bottom: 12px;
  transform: translateY(10px);

  & h2 {
    text-align: center;
    width: 60px;
  }

  & button {
    font-size: 20px;
  }
`

const SubTools = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: bold;

  & span {
    font-size: 24px;
  }

  & h2 {
    font-size: 24px;
    font-weight: bold;
  }
`

export default CalendarNavigation
