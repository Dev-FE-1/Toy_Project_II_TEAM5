import { differenceInMilliseconds } from 'date-fns/differenceInMilliseconds'

const calcOverTime = (data) => {
  if (!data || Object.keys(data) === 0) return 0

  const overTime = data.reduce((acc, current) => {
    const BASE_TIME = 9 * 60 * 60 * 1000 // 9 시간
    const { workIn, workOut } = current

    if (workIn && workOut) {
      const workDuration = differenceInMilliseconds(new Date(workOut), new Date(workIn))
      if (workDuration > BASE_TIME) {
        acc += workDuration - BASE_TIME
      }
    }

    return acc
  }, 0)

  return overTime / (60 * 60 * 1000)
}
export default calcOverTime
