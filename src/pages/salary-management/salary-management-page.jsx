import Calendar from '@components/Calendar/Calendar'
import CalendarContextProvider from '@components/Container/calendar-context'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Payslip from '@components/Payslip/Payslip'
import styled from 'styled-components'

function SalaryManagementPage() {
  return (
    <PageContainer>
      <Header header="급여 내역" />
      <CalendarContextProvider>
        <ContentContainer>
          <Calendar />
          <Payslip />
        </ContentContainer>
      </CalendarContextProvider>
      <Footer />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  /* padding: 50px 20px 0 0; */
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  max-width: 100vw;
`

const ContentContainer = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;
`
export default SalaryManagementPage
