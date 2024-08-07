import Calendar from '@components/Calendar/Calendar'
import CalendarContextProvider from '@components/Container/calendar-context'
import Header from '@components/Header/Header'
import Payslip from '@components/Payslip/Payslip'
import styled from 'styled-components'

function SalaryManagementPage() {
  return (
    <PageContainer>
      <Header header="급여 내역" />
      <CalendarContextProvider>
        <ContentContainer>
          <ContentContainer>
            <Calendar />
            <Payslip />
          </ContentContainer>
        </ContentContainer>
      </CalendarContextProvider>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
  gap: 20px;
`
export default SalaryManagementPage
