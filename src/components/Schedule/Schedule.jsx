import styled from 'styled-components'
import ScheduleItem from './ScheduleItem'
import ShadowyBox from '@components/shared/ShadowyBox'
import { colors } from '@styles/Colors'
import StyledButton from '@components/shared/Button'
import { scrollbarStyle } from '@styles/shared'
import { useState, useEffect, useMemo } from 'react'
import Modal from '@components/shared/Modal'
import ModalContents from './ModalContents'
import EditModal from './EditModalContents'
import Loading from '@components/shared/Loading'
import Flex from '@components/shared/Flex'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, addTask, updateTask, deleteTask } from '@reducers/taskSlice.js'

const getCurrentMonthAndDay = () => {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()
  return { month: month.toString(), day: day.toString() }
}

const getDivisionColor = (division) => {
  switch (division) {
    case 'Meeting':
      return 'rgba(255, 59, 59, 0.5)'
    case 'Prepare':
      return 'rgba(255, 150, 27, 0.5)'
    case 'External':
      return 'rgba(0, 133, 255, 0.5)'
    case 'Report':
      return 'rgb(198, 198, 198)'
    default:
      return '#fff'
  }
}

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
  const dispatch = useDispatch()
  const { data: tasks, status } = useSelector((state) => state.tasks)
  const [activeIndex, setActiveIndex] = useState(null)
  const [editingTask, setEditingTask] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const { month: currentMonth, day: currentDay } = getCurrentMonthAndDay()

  useEffect(() => {
    const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'
    dispatch(fetchTasks({ employeeId, month: currentMonth, day: currentDay }))
  }, [dispatch, currentMonth, currentDay])

  const formattedTasks = useMemo(() => {
    return tasks
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
  }, [tasks])

  const handleTaskAdded = (newTask) => {
    dispatch(
      addTask({
        uid: 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1',
        month: currentMonth,
        day: currentDay,
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
        month: currentMonth,
        day: currentDay,
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
          month: currentMonth,
          day: currentDay,
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
    }, [isEditModalOpen, onClick])

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
        <Title>오늘의 할 일</Title>
        <ScheduleList>
          {formattedTasks.length > 0 ? (
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
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
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
