import styled from 'styled-components'
import { todoLists } from '@components/Constant/todoLists'
import Listcontainer from './Listcontainer'
import moreIcon from '../../assets/icon/more.svg'

const rows = [
  { key: 'checklist', header: '체크리스트' },
  { key: 'status', header: '상태' },
  { key: 'completion', header: '진행상황' },
  { key: 'more', header: '' },
]

const TodoListrow = () => {
  return (
    <>
      <TodoList>
        <Title>오늘의 할 일</Title>
        <Listcontainer lists={todoLists} rows={rows} moreIcon={moreIcon} />
      </TodoList>
    </>
  )
}

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
`

const TodoList = styled.div`
  width: 90%;
  border-radius: 15px;
  padding: 20px 15px;
  box-shadow: 0 3.5px 5.5px rgba(0, 0, 0, 0.1);
`

export default TodoListrow
