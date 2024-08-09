import styled from 'styled-components'
import EmployeeList from '@components/List/EmployeeList'
import ToDoList from '@components/List/TodoList'
import Lunch from '@components/Lunch/Lunch'
import Footer from '@components/Footer/Footer'

function HomePage() {
  return (
    <>
      <Container>
        <TopSection>
          <EmployeeList />
          <Lunch />
        </TopSection>
        <BottomSection>
          <ToDoList />
        </BottomSection>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled.div`
  /* padding: 50px 20px 0 0; */
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TopSection = styled.div`
  display: flex;
  gap: 20px;
  flex-grow: 0;
`

const BottomSection = styled.div`
  display: flex;
  flex-grow: 1;
`

export default HomePage
