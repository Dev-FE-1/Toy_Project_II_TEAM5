import { format } from 'date-fns'

const setDateString = (date) => {
  return format(date, 'yyyy-MM-dd')
}

export default setDateString
