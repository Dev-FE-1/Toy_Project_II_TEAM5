import Calendar from '@components/Calendar/Calendar'
import Header from '@components/Header/Header'
import Payslip from '@components/Payslip/Payslip'
import styled from 'styled-components'
import Footer from '@components/Footer/Footer'

const PageContainer = styled.div`
  /* padding: 50px 20px 0 0; */
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

function SalaryManagementPage() {
  return (
    <PageContainer>
      <Header header="급여 내역" />
      <ContentContainer>
        <StyledCalendar />
        <StyledPayslip />
      </ContentContainer>
      <Footer />
    </PageContainer>
  )
}
export default SalaryManagementPage
