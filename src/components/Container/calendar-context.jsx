import { createContext, useState } from 'react'

export const CalendarContext = createContext()

function CalendarContextProvider({ children }) {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())
  // const [month, setMonth] = useState(6)

  return (
    <CalendarContext.Provider value={{ year, setYear, month, setMonth }}>
      {children}
    </CalendarContext.Provider>
  )
}

export default CalendarContextProvider
