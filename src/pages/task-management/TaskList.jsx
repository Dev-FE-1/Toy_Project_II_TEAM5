import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { colors } from '@styles/Colors'
import { CalendarContext } from '@components/Container/calendar-context'
import { fetchTasks } from '@reducers/taskSlice'

const transformTasksByDate = (tasks) => {
  const transformed = {}
  for (const [date, taskList] of Object.entries(tasks)) {
    transformed[date] = taskList.filter((task) => task.title && task.division).slice(0, 3)
  }
  return transformed
}

const TaskList = ({ idx }) => {
  const dispatch = useDispatch()
  const { month } = useContext(CalendarContext)
  const { data: tasks, error } = useSelector(({ tasks }) => tasks)
  const [transformedTasks, setTransformedTasks] = useState({})

  useEffect(() => {
    const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'
    dispatch(fetchTasks({ employeeId, month: month + 1 }))
  }, [dispatch, month])

  useEffect(() => {
    if (tasks) {
      setTransformedTasks(transformTasksByDate(tasks))
    }
  }, [tasks])

  const dayTasks = transformedTasks[idx] || []

  if (error) {
    return <Container>Error: {error}</Container>
  }

  if (!Object.keys(transformedTasks).includes(idx.toString())) {
    return null // 데이터가 없을 경우 null 반환
  }

  return (
    <Container>
      {dayTasks.map((task, index) => (
        <TaskItem key={index} className={task.division}>
          <TaskTitle>{task.title}</TaskTitle>
        </TaskItem>
      ))}
    </Container>
  )
}

const TaskTitle = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
  flex-grow: 1;
  padding: 0;
  margin: 0;
  list-style: none;
`

const TaskItem = styled.li`
  padding: 6px 8px;
  max-width: 70%;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${colors.white};
  background-color: ${(props) => {
    switch (props.className) {
      case 'Meeting':
        return 'rgba(255, 59, 59, 0.5)'
      case 'Prepared':
        return 'rgba(255, 150, 27, 0.5)'
      case 'External':
        return 'rgba(0, 133, 255, 0.5)'
      case 'Report':
        return 'rgb(198, 198, 198)'
      default:
        return '#fff'
    }
  }};
`

export default TaskList
