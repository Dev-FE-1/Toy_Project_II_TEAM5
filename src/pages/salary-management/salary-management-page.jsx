import Header from '@components/Header/Header'
import Payslip from '@components/Payslip/Payslip'
import Calendar from '@components/Calendar/Calendar'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
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
    </PageContainer>
  )
}
export default SalaryManagementPage
