import { useState, useEffect } from 'react'
import { FIRSTDAY } from '@constants/calendar'

const useCalendar = (year, month) => {
  const [calendarDays, setCalendarDays] = useState([])

  const firstDayIndex = FIRSTDAY(year, month)

  useEffect(() => {
    let previousMonthDays = []
    if (firstDayIndex !== 0) {
      previousMonthDays = getLastWeekOfPreviousMonth(year, month)
    }

    const currentMonthDays = getDaysInMonth(year, month)

    setCalendarDays([...previousMonthDays, ...currentMonthDays])
  }, [year, month, firstDayIndex])

  return { calendarDays }
}

//helper
const getLastWeekOfPreviousMonth = (year, month) => {
  const lastDayOfPreviousMonth = new Date(year, month, 0)
  const lastDayOfWeek = lastDayOfPreviousMonth.getDay()

  return Array.from(
    { length: lastDayOfWeek + 1 },
    (_, i) => new Date(year, month, -lastDayOfWeek + i)
  )
}

const getDaysInMonth = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  return Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1))
}

export default useCalendar
