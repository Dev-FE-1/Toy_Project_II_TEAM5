import { fetchTasks } from '@reducers/taskSlice'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function useTodoList() {
  const dispatch = useDispatch()
  const { data: todos, status } = useSelector((state) => state.tasks)

  const header = ['할 일', '상태', '완료율', '']

  useEffect(() => {
    const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'
    const currentMonth = new Date().getMonth() + 1
    const currentDay = new Date().getDate()

    dispatch(fetchTasks({ employeeId, month: currentMonth, day: currentDay }))
  }, [dispatch])

  const loading = status === 'pending'

  return { todos, loading, header }
}

export default useTodoList
