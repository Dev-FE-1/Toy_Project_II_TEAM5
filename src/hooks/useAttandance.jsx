import { fetchWorkList } from '@reducers/salarySlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function useAttendance({ month }) {
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [processedData, setProcessedData] = useState(null)

  const dispatch = useDispatch()

  const { data, status, error } = useSelector((state) => state)
  console.log('data', data)

  // dispatch
  useEffect(() => {
    dispatch(fetchWorkList(month + 1))
  }, [month, dispatch])

  // useEffect(() => {
  //   if (status === 'fulfilled' && data) {
  //     const processWorkTimeTable = (workTimeTable) => {
  //       const workHours = 9 * 60 * 60 * 1000 // 9 hours in milliseconds
  //       let totalOverTime = 0

  //       const processed = workTimeTable?.reduce((acc, entry) => {
  //         const day = new Date(entry.workIn).getDate()
  //         if (!acc[day]) acc[day] = {}
  //         if (entry.workIn && entry.workOut) {
  //           const workIn = new Date(entry.workIn).getTime()
  //           const workOut = new Date(entry.workOut).getTime()
  //           const workedTime = workOut - workIn
  //           const overTime = workedTime - workHours
  //           if (overTime > 0) {
  //             totalOverTime += overTime
  //           }
  //           acc[day] = {
  //             workIn: new Date(entry.workIn).toLocaleTimeString('en-GB', {
  //               hour: '2-digit',
  //               minute: '2-digit',
  //             }),
  //             workOut: new Date(entry.workOut).toLocaleTimeString('en-GB', {
  //               hour: '2-digit',
  //               minute: '2-digit',
  //             }),
  //           }
  //         }
  //         return acc
  //       }, {})

  //       return {
  //         ...data,
  //         workTimeTable: processed,
  //         overTime: totalOverTime / (1000 * 60 * 60), // convert milliseconds to hours
  //       }
  //     }

  //     const processed = processWorkTimeTable(data.workTimeTable)
  //     console.log('Processed:', processed)
  //     setProcessedData(processed)
  //     setIsDataLoaded(true)
  //   }
  // }, [data, status])

  return { processedData, isDataLoaded, status }
}

export default useAttendance
