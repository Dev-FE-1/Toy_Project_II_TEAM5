import { fetchEmployeeTasks } from '@mock/fetchEmployeeTasks'
import { useEffect, useState } from 'react'

function useTodoList() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const header = ['할 일', '상태', '완료율', '']

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

  return { todos, loading, header }
}

export default useTodoList
