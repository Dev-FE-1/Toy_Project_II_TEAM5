import { fetchTasks } from '@reducers/salarySlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function useTodoListForCalendar({ month }) {
  const dispatch = useDispatch()
  const { data, status } = useSelector(({ tasks }) => tasks)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      console.log('todolist', month)
      setError(null)
      try {
        await dispatch(fetchTasks(month + 1)).unwrap()
      } catch (err) {
        setError(err.message)
      }
    }

    fetchData()
  }, [month, dispatch])

  return { data, status, error }
}

export default useTodoListForCalendar
