import StyledButton from '@components/shared/Button'
import Flex from '@components/shared/Flex'
import Loading from '@components/shared/Loading'
import Modal from '@components/shared/Modal'
import ShadowyBox from '@components/shared/ShadowyBox'
import { addTask, deleteTask, fetchTasks, updateTask } from '@reducers/taskSlice.js'
import { colors } from '@styles/Colors'
import { scrollbarStyle } from '@styles/shared'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import EditModal from './EditModalContents'
import ModalContents from './ModalContents'
import ScheduleItem from './ScheduleItem'
import { DIVISION_COLORS } from '@constants/Task'
import { CalendarContext } from '@components/Container/calendar-context'

const getDivisionColor = (division) => DIVISION_COLORS[division]

const getCompletionValue = (status) => {
  switch (status) {
    case '진행중':
      return Math.floor(Math.random() * 99) + 1
    case '완료됨':
      return 100
    case '취소됨':
      return 0
    default:
      return 0
  }
}

export default function Schedule() {
  const { month, day } = useContext(CalendarContext)
  const dispatch = useDispatch()
  const { data: tasks, status } = useSelector(({ tasks }) => tasks)
  const [activeIndex, setActiveIndex] = useState(null)
  const [editingTask, setEditingTask] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  // console.log('tasks', tasks)

  const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'

  useEffect(() => {
    dispatch(fetchTasks({ employeeId, month: month + 1 }))
  }, [dispatch, month])

  const dailyTasks = useMemo(() => {
    return tasks?.[day] || []
  }, [tasks, day])

  const formattedTasks = useMemo(() => {
    return dailyTasks
      .map((task) => {
        return {
          ...task,
          color: getDivisionColor(task.division),
          time: task.time,
          completion: getCompletionValue(task.status),
          title: task.title,
        }
      })
      .sort((a, b) => a.time.localeCompare(b.time))
  }, [dailyTasks])

  const handleTaskAdded = (newTask) => {
    dispatch(
      addTask({
        uid: 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1',
        month: month + 1,
        day,
        taskData: {
          ...newTask,
          completion: getCompletionValue(newTask.status),
          title: newTask.title || 'New Task',
        },
      })
    )
  }

  const handleEditClick = (task) => {
    setEditingTask(task)
    setIsEditModalOpen(true)
  }

  const handleTaskUpdated = (taskId, updatedTask) => {
    dispatch(
      updateTask({
        employeeId: 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1',
        month: month + 1,
        day,
        taskId,
        taskData: {
          ...updatedTask,
          time: updatedTask.time,
          completion: getCompletionValue(updatedTask.status),
        },
      })
    )
    setEditingTask(null)
    setIsEditModalOpen(false)
  }

  const handleDeleteClick = async (taskId) => {
    if (window.confirm('정말로 이 일정을 삭제하시겠습니까?')) {
      dispatch(
        deleteTask({
          employeeId: 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1',
          month: month + 1,
          day,
          taskId,
        })
      )
    }
  }

  const EditTrigger = ({ onClick }) => {
    useEffect(() => {
      if (isEditModalOpen) {
        onClick()
      }
    }, [onClick])

    return null
  }

  if (status === 'pending' || status === 'idle') {
    return (
      <Center>
        <Loading />
      </Center>
    )
  }

  return (
    <ScheduleContainer>
      <div style={{ width: '100%' }}>
        <h2>오늘의 할 일</h2>
        <ScheduleList>
          {Object.keys(formattedTasks).length > 0 ? (
            formattedTasks.map((item, index) => (
              <ScheduleItem
                key={item.id}
                item={item}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                onEditClick={() => handleEditClick(item)}
                onDeleteClick={() => handleDeleteClick(item.id)}
              />
            ))
          ) : (
            <div>표시할 작업이 없습니다.</div>
          )}
        </ScheduleList>
      </div>
      <ButtonContainer>
        <Modal Trigger={Trigger}>
          <ModalContents employeeId="Zrghj2Jf3CVwQ7jSOmjCXYBBlek1" onTaskAdded={handleTaskAdded} />
        </Modal>
      </ButtonContainer>
      <Modal Trigger={(props) => <EditTrigger {...props} task={editingTask} />}>
        {editingTask && (
          <EditModal
            employeeId="Zrghj2Jf3CVwQ7jSOmjCXYBBlek1"
            task={editingTask}
            onTaskUpdated={handleTaskUpdated}
            onClose={() => setIsEditModalOpen(false)}
          />
        )}
      </Modal>
    </ScheduleContainer>
  )
}

const Center = styled(Flex)`
  width: 32%;
`

const ScheduleContainer = styled(ShadowyBox)`
  display: flex;
  flex-direction: column;
  padding: 45px;
  justify-content: space-between;
  align-items: flex-start;
  width: 32%;
  margin-bottom: 10px;
  ${scrollbarStyle}

  & h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`

const ScheduleList = styled.div`
  overflow-y: auto;
  width: 100%;
  max-height: 700px;
  padding-top: 10px;
  ${scrollbarStyle}
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function Trigger({ onClick }) {
  return (
    <StyledButton
      text="일정 추가"
      $backgroundColor={colors.primary_200}
      $hoverColor={colors.primary_300}
      $margin="30px 0 0 0"
      onClick={onClick}
    />
  )
}
