import Calendar from '@components/Calendar/Calendar'
import Header from '@components/Header/Header'
import Payslip from '@components/Payslip/Payslip'
import styled from 'styled-components'
import Footer from '@components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchWorkList } from '@reducers/salarySlice'

function SalaryManagementPage() {
  const dispatch = useDispatch()
  const { data, status, error } = useSelector((state) => state.workList)
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [processedData, setProcessedData] = useState(null)
  const [month, setMonth] = useState(7) // State to track the selected month

  useEffect(() => {
    dispatch(fetchWorkList(month))
  }, [month, dispatch])

  useEffect(() => {
    if (status === 'succeeded' && data) {
      console.log('raw data', data)
      const processWorkTimeTable = (workTimeTable) => {
        const workHours = 9 * 60 * 60 * 1000 // 9 hours in milliseconds
        let totalOverTime = 0

        const processed = workTimeTable.reduce((acc, entry) => {
          const day = new Date(entry.workIn).getDate()
          if (!acc[day]) acc[day] = {}
          if (entry.workIn && entry.workOut) {
            const workIn = new Date(entry.workIn).getTime()
            const workOut = new Date(entry.workOut).getTime()
            const workedTime = workOut - workIn
            const overTime = workedTime - workHours
            if (overTime > 0) {
              totalOverTime += overTime
            }
            acc[day] = {
              workIn: new Date(entry.workIn).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              }),
              workOut: new Date(entry.workOut).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              }),
            }
          }
          return acc
        }, {})

        return {
          ...data,
          workTimeTable: processed,
          overTime: totalOverTime / (1000 * 60 * 60), // convert milliseconds to hours
        }
      }

      const processed = processWorkTimeTable(data.workTimeTable)
      console.log('Processed Data:', processed)
      setProcessedData(processed)
      setIsDataLoaded(true)
    }
  }, [data, status])

  const handleMonthChange = (event) => {
    setMonth(parseInt(event.target.value, 10))
  }

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'failed') return <div>Error: {error}</div>
  if (!isDataLoaded) return <div>Loading...</div>

  return (
    <PageContainer>
      <Header header="급여 내역" />
      <ContentContainer>
        <StyledCalendar
          dayNum={processedData.dayNum}
          firstDay={processedData.firstDay}
          workTimeTable={processedData.workTimeTable}
          selectedMonth={month} // Pass the selectedMonth to Calendar
          onMonthChange={handleMonthChange}
        />
        <StyledPayslip overTime={processedData.overTime} />
      </ContentContainer>
      <Footer />
    </PageContainer>
  )
}

export default SalaryManagementPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  max-width: 100vw;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 20px 0;
  gap: 20px;
`

const StyledCalendar = styled(Calendar)`
  width: 90%;
`

const StyledPayslip = styled(Payslip)`
  width: 10%;
`
