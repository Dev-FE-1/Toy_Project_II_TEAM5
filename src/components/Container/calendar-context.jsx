import Loading from '@components/shared/Loading'
import useAttendance from '@hooks/useAttandance'
import { createContext, useState } from 'react'

export const CalendarContext = createContext()

function CalendarContextProvider({ children }) {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(6)

  const { isDataLoaded, status } = useAttendance({ month })

  if (status === 'pending') return <Loading />
  if (status === 'rejected') return <div>Error</div>

  return (
    <CalendarContext.Provider value={{ year, setYear, month, setMonth }}>
      {children}
    </CalendarContext.Provider>
  )
}

export default CalendarContextProvider
