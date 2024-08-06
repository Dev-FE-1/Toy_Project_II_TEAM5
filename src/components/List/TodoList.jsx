import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ListComponent from './ListComponent.jsx'
import TodoChecklist from './CustomRenderers/TodoChecklist.jsx'
import TodoMore from './CustomRenderers/TodoMore.jsx'
import Progressbar from './CustomRenderers/Progressbar.jsx'
import ShadowyBox from '@components/shared/ShadowyBox.jsx'
import { fetchEmployeeTasks } from '../../mock/fetchEmployeeTasks'
import Loading from '@components/shared/Loading'
import Flex from '@components/shared/Flex.jsx'

function ToDoList() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTasks() {
      try {
        const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'
        const tasks = await fetchEmployeeTasks(employeeId)
        const formattedTasks = tasks.map((task) => ({
          ...task,
          checklist: task.task,
        }))
        setTodos(formattedTasks)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    loadTasks()
  }, [])

  const headers = ['할 일', '상태', '완료율', '']

  const keys = ['task', 'status', 'completion', 'more']
  const customRenderers = {
    task: TodoChecklist,
    completion: Progressbar,
    more: TodoMore,
  }

  if (loading) {
    return (
      <Center>
        <Loading />
      </Center>
    )
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

const Center = styled(Flex)`
  width: 100%;
`

const ListContainer = styled(ShadowyBox)`
  width: 100%;
`

export default ToDoList
