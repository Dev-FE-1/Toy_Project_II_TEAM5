import { CalendarContext } from '@components/Container/calendar-context'
import { DIVISION_COLORS } from '@constants/Task'
import useAuthState from '@hooks/useAuthState'
import { fetchTasks } from '@reducers/taskSlice'
import { colors } from '@styles/Colors'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FIRSTDAY } from '@constants/calendar'

const TaskList = ({ idx }) => {
  const { month, year } = useContext(CalendarContext)
  const firstDayIndex = FIRSTDAY(year, month)
  const dispatch = useDispatch()
  const { data: tasks, error } = useSelector(({ tasks }) => tasks)

  const { user } = useAuthState()

  useEffect(() => {
    if (!user) return

    const employeeId = user.uid
    dispatch(fetchTasks({ employeeId, month: month + 1 }))
  }, [dispatch, month, user])

  if (error) {
    console.log('Error: ' + error)
  }

  if (!tasks) return null

  return (
    <Container>
      {tasks?.[idx + 1 - firstDayIndex]?.slice(0, 3).map((task, idx) => (
        <TaskItem key={task + idx} $division={task.division}>
          {task.title}
        </TaskItem>
      ))}
    </Container>
  )
}

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
  background-color: ${({ $division }) => DIVISION_COLORS[$division]};
`

export default TaskList
