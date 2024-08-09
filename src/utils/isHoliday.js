import { HOLIDAYS } from '@constants/calendar'
import setDateString from './setDateString'

const isHoliday = (date) => {
  const dateString = setDateString(date)
  return HOLIDAYS.find((holiday) => holiday.date === dateString)
}

export default isHoliday
