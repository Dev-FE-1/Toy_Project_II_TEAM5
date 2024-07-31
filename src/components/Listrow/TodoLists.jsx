import styled, { css } from 'styled-components'
import { todoLists } from '@components/Constant/todoLists'
import Listcontainer from './Listcontainer'
import moreIcon from '../../assets/icon/more.svg'

const rows = [
  { key: 'checklist', header: '체크리스트' },
  { key: 'status', header: '상태' },
  { key: 'completion', header: '진행상황' },
  { key: 'more', header: '' },
]

function TodoLists() {
  const createCustomChecklistCell = (item, row) => {
    if (row.key === 'checklist') {
      return (
        <ClassifyWrapper>
          <ClassifyColor $status={item.classification}></ClassifyColor>
          <span>{item.checklist}</span>
        </ClassifyWrapper>
      )
    }
    return item[row.key]
  }
  return (
    <>
      <TodoList>
        <Title>오늘의 할 일</Title>
        <Listcontainer
          lists={todoLists}
          rows={rows}
          moreIcon={moreIcon}
          createCustomChecklistCell={createCustomChecklistCell}
        />
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
  margin-bottom: 30px;
`

const ClassifyWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ClassifyColor = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  ${(props) =>
    props.$status === 'meeting' &&
    css`
      background: rgba(255, 59, 59, 0.1);
    `}
  ${(props) =>
    props.$status === 'prepare' &&
    css`
      background: rgba(255, 150, 27, 0.1);
    `}
  ${(props) =>
    props.$status === 'external' &&
    css`
      background: rgba(0, 133, 255, 0.1);
    `}
  ${(props) =>
    props.$status === 'report' &&
    css`
      background: rgba(232, 232, 232, 1);
    `}
`

export default TodoLists
