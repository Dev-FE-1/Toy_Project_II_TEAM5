// import styled from 'styled-components'
// import ScheduleItem from './ScheduleItem'
// import ShadowyBox from '@components/shared/ShadowyBox'
// import { colors } from '@styles/Colors'
// import StyledButton from '@components/shared/Button'
// import { scrollbarStyle } from '@styles/shared'
// import { useState, useEffect } from 'react'
// import Modal from '@components/shared/Modal'
// import ModalContents from './ModalContents'
// import EditModal from './EditModalContents'
// import Loading from '@components/shared/Loading'
// import Flex from '@components/shared/Flex'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchTasks, addTask, updateTask, deleteTask } from '@reducers/taskSlice.js'
// import { useMemo } from 'react'
// import { Timestamp } from 'firebase/firestore'

// const getCurrentMonthAndDay = () => {
//   const today = new Date()
//   const month = today.getMonth() + 1 // Months are 0-based in JavaScript
//   const day = today.getDate()
//   return { month: month.toString(), day: day.toString() }
// }

// const getDivisionColor = (division) => {
//   switch (division) {
//     case 'Meeting':
//       return 'rgba(255, 59, 59, 0.5)'
//     case 'Prepare':
//       return 'rgba(255, 150, 27, 0.5)'
//     case 'External':
//       return 'rgba(0, 133, 255, 0.5)'
//     case 'Report':
//       return 'rgb(198, 198, 198)'
//     default:
//       return '#fff'
//   }
// }

// const getCompletionValue = (status) => {
//   switch (status) {
//     case '진행중':
//       return Math.floor(Math.random() * 99) + 1
//     case '완료됨':
//       return 100
//     case '취소됨':
//       return 0
//     default:
//       return 0
//   }
// }

// export default function Schedule() {
//   const dispatch = useDispatch()
//   const { data: tasks, status } = useSelector((state) => state.tasks)
//   const [activeIndex, setActiveIndex] = useState(null)
//   const [editingTask, setEditingTask] = useState(null)
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false)

//   useEffect(() => {
//     const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'
//     dispatch(fetchTasks(employeeId))
//   }, [dispatch])

//   const formattedTasks = useMemo(() => {
//     return tasks
//       .map((task) => ({
//         ...task,
//         color: getDivisionColor(task.division),
//         time: new Date(task.time), // Convert string back to Date
//         completion: getCompletionValue(task.status),
//       }))
//       .sort((a, b) => a.time.getTime() - b.time.getTime())
//   }, [tasks])

//   const handleTaskAdded = (newTask) => {
//     dispatch(
//       addTask({
//         uid: 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1',
//         taskData: {
//           ...newTask,
//           time: new Date(newTask.time).toISOString(), // Convert Date to ISO string
//           completion: getCompletionValue(newTask.status),
//         },
//       })
//     )
//   }

//   const handleEditClick = (task) => {
//     setEditingTask(task)
//     setIsEditModalOpen(true)
//   }

//   const handleTaskUpdated = (taskId, updatedTask) => {
//     dispatch(
//       updateTask({
//         employeeId: 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1',
//         taskId,
//         taskData: {
//           ...updatedTask,
//           time: new Date(updatedTask.time).toISOString(), // Convert Date to ISO string
//           completion: getCompletionValue(updatedTask.status),
//         },
//       })
//     )
//     setEditingTask(null)
//     setIsEditModalOpen(false)
//   }

//   const handleDeleteClick = async (taskId) => {
//     if (window.confirm('정말로 이 일정을 삭제하시겠습니까?')) {
//       dispatch(deleteTask({ employeeId: 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1', taskId }))
//     }
//   }

//   const EditTrigger = ({ onClick }) => {
//     useEffect(() => {
//       if (isEditModalOpen) {
//         onClick()
//       }
//     }, [isEditModalOpen, onClick])

//     return null
//   }

//   if (status === 'pending' || status === 'idle') {
//     return (
//       <Center>
//         <Loading />
//       </Center>
//     )
//   }

//   if (status === 'rejected') {
//     return <div>데이터를 불러오는 데 실패했습니다.</div>
//   }

//   return (
//     <ScheduleContainer>
//       <Title>오늘의 할 일</Title>
//       <ScheduleList>
//         {formattedTasks.map((item, index) => (
//           <ScheduleItem
//             key={item.id}
//             item={item}
//             isActive={activeIndex === index}
//             onClick={() => setActiveIndex(index)}
//             onEditClick={() => handleEditClick(item)}
//             onDeleteClick={() => handleDeleteClick(item.id)}
//           />
//         ))}
//       </ScheduleList>
//       <ButtonContainer>
//         <Modal Trigger={Trigger}>
//           <ModalContents employeeId="Zrghj2Jf3CVwQ7jSOmjCXYBBlek1" onTaskAdded={handleTaskAdded} />
//         </Modal>
//       </ButtonContainer>
//       <Modal Trigger={(props) => <EditTrigger {...props} task={editingTask} />}>
//         {editingTask && (
//           <EditModal
//             employeeId="Zrghj2Jf3CVwQ7jSOmjCXYBBlek1"
//             task={editingTask}
//             onTaskUpdated={handleTaskUpdated}
//             onClose={() => setIsEditModalOpen(false)}
//           />
//         )}
//       </Modal>
//     </ScheduleContainer>
//   )
// }

// const Center = styled(Flex)`
//   width: 32%;
// `

// const ScheduleContainer = styled(ShadowyBox)`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 45px;
//   align-items: flex-start;
//   width: 32%;
//   margin-bottom: 10px;
//   ${scrollbarStyle}
// `

// const Title = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 40px;
// `

// const ScheduleList = styled.div`
//   overflow-y: auto;
//   width: 100%;
//   max-height: 750px;
//   padding-right: 10px;
//   ${scrollbarStyle}
// `

// const ButtonContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `

// function Trigger({ onClick }) {
//   return (
//     <StyledButton
//       text="일정 추가"
//       $backgroundColor={colors.primary_200}
//       $hoverColor={colors.primary_300}
//       $margin="30px 0 0 0"
//       onClick={onClick}
//     />
//   )
// }
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
import { Timestamp } from 'firebase/firestore'

// Utility function to get current month and day
const getCurrentMonthAndDay = () => {
  const today = new Date()
  const month = today.getMonth() + 1 // Months are 0-based in JavaScript
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

  // Get current month and day
  const { month: currentMonth, day: currentDay } = getCurrentMonthAndDay()

  useEffect(() => {
    const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'
    dispatch(fetchTasks({ employeeId, month: currentMonth, day: currentDay }))
  }, [dispatch, currentMonth, currentDay])

  const formattedTasks = useMemo(() => {
    return tasks
      .map((task) => ({
        ...task,
        color: getDivisionColor(task.division),
        time: task.time instanceof Timestamp ? task.time.toDate() : new Date(task.time), // Convert to Date object
        completion: getCompletionValue(task.status),
      }))
      .sort((a, b) => a.time.getTime() - b.time.getTime())
  }, [tasks])

  const handleTaskAdded = (newTask) => {
    dispatch(
      addTask({
        uid: 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1',
        month: currentMonth,
        day: currentDay,
        taskData: {
          ...newTask,
          time: new Date(newTask.time).toISOString(), // Convert Date to ISO string
          completion: getCompletionValue(newTask.status),
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
          time: new Date(updatedTask.time).toISOString(), // Convert Date to ISO string
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

  if (status === 'rejected') {
    return <div>데이터를 불러오는 데 실패했습니다.</div>
  }

  return (
    <ScheduleContainer>
      <Title>오늘의 할 일</Title>
      <ScheduleList>
        {formattedTasks.map((item, index) => (
          <ScheduleItem
            key={item.id}
            item={item}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            onEditClick={() => handleEditClick(item)}
            onDeleteClick={() => handleDeleteClick(item.id)}
          />
        ))}
      </ScheduleList>
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
  justify-content: space-between;
  padding: 45px;
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
  max-height: 750px;
  padding-right: 10px;
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
