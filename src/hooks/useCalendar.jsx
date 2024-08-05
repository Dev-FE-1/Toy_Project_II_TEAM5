import { WEEKDAY } from '@constants/calendar'
import { useState, useEffect } from 'react'

const useCalendar = (year, month) => {
  const calendarHeader = WEEKDAY

  const [calendarDays, setCalendarDays] = useState([])

  useEffect(() => {
    const firstDayOfMonth = new Date(year, month, 1)

    // 이번달의 1일이 일요일이 아닌 경우에 지난달 마지막 주 추가
    let previousMonthDays = []
    if (firstDayOfMonth.getDay() !== 0) {
      previousMonthDays = getLastWeekOfPreviousMonth(year, month)
    }

    const currentMonthDays = getDaysInMonth(year, month)

    setCalendarDays([...previousMonthDays, ...currentMonthDays])
  }, [year, month])

  return { calendarHeader, calendarDays }
}

//helper
const getLastWeekOfPreviousMonth = (year, month) => {
  const lastDayOfPreviousMonth = new Date(year, month, 0) // 전달의 마지막 날
  const lastDayOfWeek = lastDayOfPreviousMonth.getDay() // 전달의 마지막 날의 요일

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
