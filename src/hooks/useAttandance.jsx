import { fetchWorkList } from '@reducers/salarySlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function useAttendance({ month }) {
  const dispatch = useDispatch()
  const { data, status } = useSelector(({ workList }) => workList)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setError(null)
      try {
        await dispatch(fetchWorkList(month + 1)).unwrap()
      } catch (err) {
        setError(err.message)
      }
    }

    fetchData()
  }, [month, dispatch])

  return { data, status, error }
}

export default useAttendance
