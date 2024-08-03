import Header from '@components/Header/Header'
import Calendar from '@components/Calendar/Calendar'
import Schedule from '@components/Schedule/Schedule'
import styled from 'styled-components'
import Footer from '@components/Footer/Footer'

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

const StyledSchedule = styled(Schedule)`
  width: 10%;
`

function TaskManagementPage() {
  return (
    <PageContainer>
      <Header header="업무 관리" />
      <ContentContainer>
        <StyledCalendar />
        <StyledSchedule />
      </ContentContainer>
      <Footer />
    </PageContainer>
  )
}
export default TaskManagementPage
