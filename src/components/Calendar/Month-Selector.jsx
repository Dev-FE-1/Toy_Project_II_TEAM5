import { CalendarContext } from '@components/Container/calendar-context'
import { MONTHS } from '@constants/calendar'
import { useContext } from 'react'
import styled from 'styled-components'

function MonthSelector() {
  const { month, setMonth } = useContext(CalendarContext)

  const handleMonthSelect = (e) => {
    setMonth(+e.target.value)
  }

  return (
    <Select
      value={month}
      onChange={(e) => {
        handleMonthSelect(e)
      }}
    >
      {MONTHS.map((month) => (
        <option key={month} value={month - 1}>
          {month}월
        </option>
      ))}
    </Select>
  )
}

const Select = styled.select`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 7em;
  width: 100%;
  outline: none;

  & option {
    padding: 6px 0;
  }
`

export default MonthSelector
