import styled from 'styled-components'
import EmployeeList from '@components/List/EmployeeList'
import ToDoList from '@components/List/TodoList'
import Lunch from './Lunch/Lunch'
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TopSection = styled.div`
  display: flex;
  gap: 20px;
  height: 50%;
`

const BottomSection = styled.div`
  display: flex;
  height: 50%;
`

export default HomePage
