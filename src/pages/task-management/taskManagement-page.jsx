import Calendar from '@components/Calendar/Calendar'
import CalendarContextProvider from '@components/Container/calendar-context'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Schedule from '@components/Schedule/Schedule'
import ScheduleList from '@pages/salary-management/ScheduleList'
import styled from 'styled-components'

function TaskManagementPage() {
  return (
    <PageContainer>
      <Header header="업무 관리" />
      <CalendarContextProvider>
        <ContentContainer>
          <Calendar ScheduleList={ScheduleList} />
          <Schedule />
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
  max-width: 100vw;
`

const ContentContainer = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;
`
export default TaskManagementPage
