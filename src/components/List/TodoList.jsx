import styled from 'styled-components'
import ListComponent from './ListComponent.jsx'
import { todos } from '../Constant/todos.jsx'
import TodoChecklist from './CustomRenderers/TodoChecklist.jsx'
import TodoMore from './CustomRenderers/TodoMore.jsx'
import Progressbar from './CustomRenderers/Progressbar.jsx'
import ShadowyBox from '@components/shared/ShadowyBox.jsx'

function ToDoList() {
  const headers = ['할 일', '상태', '완료율', '']

  const keys = ['checklist', 'status', 'completion', 'more']
  const customRenderers = {
    checklist: TodoChecklist,
    completion: Progressbar,
    more: TodoMore,
  }

  return (
    <ListContainer>
      <ListComponent
        title="오늘의 할 일"
        headers={headers}
        items={todos}
        keys={keys}
        customRenderers={customRenderers}
      />
    </ListContainer>
  )
}

const ListContainer = styled(ShadowyBox)`
  width: 100%;
`

export default ToDoList
