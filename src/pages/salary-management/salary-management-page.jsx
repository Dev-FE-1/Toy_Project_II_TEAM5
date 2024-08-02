import Calendar from '@components/Calendar/Calendar'
import Header from '@components/Header/Header'
import Payslip from '@components/Payslip/Payslip'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  height: calc(100vh - 20px - 75px);
  box-sizing: border-box;
`

const ContentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`

function SalaryManagementPage() {
  return (
    <PageContainer>
      <Header header="급여 내역" />
      <ContentContainer>
        <Calendar />
        <Payslip />
      </ContentContainer>
    </PageContainer>
  )
}
export default SalaryManagementPage
