import styled from 'styled-components'
import { todoLists } from '../Constant/todoLists'
import Listcontainer from './Listcontainer'

const rows = [
  { key: 'checklist', header: '체크리스트' },
  { key: 'status', header: '상태' },
  { key: 'completion', header: '진행상황' },
]

const TodoListrow = () => {
  return (
    <TodoList>
      <Title>오늘의 할 일</Title>
      <Listcontainer
        lists={todoLists}
        rows={rows}
      />
    </TodoList>
  )
}

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
`

const TodoList = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 20px 15px;
  box-shadow: 0 3.5px 5.5px rgba(0, 0, 0, 0.1);
`

export default TodoListrow
