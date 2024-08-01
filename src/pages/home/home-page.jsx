import { colors } from '@styles/Colors'
import styled from 'styled-components'
import EmployeeList from '@components/List/EmployeeList'
import ToDoList from '@components/List/TodoList'
import Lunch from './Lunch/Lunch'

function HomePage() {
  return (
    <>
      <Container>
        <TopSection>
          <EmployeeList />
          <Lunch />
        </TopSection>
        <ToDoList />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TopSection = styled.div`
  display: flex;
  gap: 20px;
`

export default HomePage
