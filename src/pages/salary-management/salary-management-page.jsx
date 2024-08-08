import Calendar from '@components/Calendar/Calendar'
import CalendarContextProvider from '@components/Container/calendar-context'
import Header from '@components/Header/Header'
import Payslip from '@components/Payslip/Payslip'
import styled from 'styled-components'
import ScheduleList from './ScheduleList'
import Footer from '@components/Footer/Footer'

function SalaryManagementPage() {
  return (
    <PageContainer>
      <Header header="급여 내역" />
      <CalendarContextProvider>
        <ContentContainer>
          <Calendar ScheduleList={ScheduleList} />
          <Payslip />
        </ContentContainer>
      </CalendarContextProvider>
      <Footer />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
`

const ContentContainer = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;
`
export default SalaryManagementPage
