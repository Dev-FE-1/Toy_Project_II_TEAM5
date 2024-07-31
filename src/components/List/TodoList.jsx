import ListComponent from './ListComponent.jsx'
import { todos } from '../Constant/todos.jsx'
import TodoChecklist from './CustomRenderers/TodoChecklist.jsx'
import TodoMore from './CustomRenderers/TodoMore.jsx'
import Progressbar from './CustomRenderers/Progressbar.jsx'

function ToDoList() {
  const headers = ['할 일', '상태', '완료율', '더보기']

  const keys = ['checklist', 'status', 'completion', 'more']
  const customRenderers = {
    checklist: TodoChecklist,
    completion: Progressbar,
    more: TodoMore,
  }

  return (
    <ListComponent
      title="오늘의 할 일"
      headers={headers}
      items={todos}
      keys={keys}
      customRenderers={customRenderers}
    />
  )
}

export default ToDoList
