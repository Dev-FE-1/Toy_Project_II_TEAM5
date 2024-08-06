// import { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import ScheduleItem from './ScheduleItem'
// import ShadowyBox from '@components/shared/ShadowyBox'
// import { colors } from '@styles/Colors'
// import StyledButton from '@components/shared/Button'
// import { fetchEmployeeTasks } from '../../mock/fetchEmployeeTasks'
// import Modal from '@components/shared/Modal'
// import ModalContents from './ModalContents'
// import EditModal from './EditModalContents'
// import deleteEmployeeTasks from '@mock/deleteEmployeeTasks'

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

// export default function Schedule() {
//   const [scheduleItems, setScheduleItems] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [activeIndex, setActiveIndex] = useState(null)
//   const [editingTask, setEditingTask] = useState(null)
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false)

//   useEffect(() => {
//     const loadTasks = async () => {
//       try {
//         const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'
//         const tasks = await fetchEmployeeTasks(employeeId)
//         const formattedTasks = tasks.map((task) => ({
//           ...task,
//           color: getDivisionColor(task.division),
//         }))
//         formattedTasks.sort((a, b) => a.time.getTime() - b.time.getTime())
//         setScheduleItems(formattedTasks)
//         setLoading(false)
//       } catch (error) {
//         console.log(error)
//         setLoading(false)
//       }
//     }

//     loadTasks()
//   }, [])

//   const handleTaskAdded = (newTask) => {
//     setScheduleItems((prev) => {
//       const updatedItems = [...prev, { ...newTask, color: getDivisionColor(newTask.division) }]
//       return updatedItems.sort((a, b) => a.time.getTime() - b.time.getTime())
//     })
//   }

//   const handleEditClick = (task) => {
//     setEditingTask(task)
//     setIsEditModalOpen(true)
//     console.log('Edit button clicked, task:', task)
//   }

//   const handleTaskUpdated = (taskId, updatedTask) => {
//     setScheduleItems((prev) =>
//       prev.map((item) =>
//         item.id === taskId
//           ? { ...item, ...updatedTask, color: getDivisionColor(updatedTask.division) }
//           : item
//       )
//     )
//     setEditingTask(null)
//     setIsEditModalOpen(false)
//   }

//   const handleDeleteClick = async (taskId) => {
//     if (window.confirm('정말로 이 일정을 삭제하시겠습니까?')) {
//       try {
//         await deleteEmployeeTasks('Zrghj2Jf3CVwQ7jSOmjCXYBBlek1', taskId)
//         setScheduleItems((prev) => prev.filter((item) => item.id !== taskId))
//       } catch (error) {
//         console.error('Error deleting task:', error)
//         alert('일정 삭제 중 오류가 발생했습니다.')
//       }
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

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   return (
//     <ScheduleContainer>
//       <Title>오늘의 할 일</Title>
//       <ScheduleList>
//         {scheduleItems.map((item, index) => (
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
//       <ButtonContainer>
//         <Modal
//           Trigger={(props) => (
//             <EditTrigger {...props} task={editingTask} onClose={() => setIsEditModalOpen(false)} />
//           )}
//         >
//           {editingTask && (
//             <EditModal
//               employeeId="Zrghj2Jf3CVwQ7jSOmjCXYBBlek1"
//               task={editingTask}
//               onTaskUpdated={handleTaskUpdated}
//               onClose={() => setIsEditModalOpen(false)}
//             />
//           )}
//         </Modal>
//       </ButtonContainer>
//     </ScheduleContainer>
//   )
// }

// const ScheduleContainer = styled(ShadowyBox)`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 45px;
//   align-items: flex-start;
//   width: 32%;
//   margin-bottom: 10px;
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
//   &::-webkit-scrollbar {
//     width: 5px;
//     border-radius: 6px;
//     background: rgba(255, 255, 255, 0.4);
//   }
//   &::-webkit-scrollbar-thumb {
//     background: rgba(0, 0, 0, 0.3);
//     border-radius: 6px;
//   }
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

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ScheduleItem from './ScheduleItem'
import ShadowyBox from '@components/shared/ShadowyBox'
import { colors } from '@styles/Colors'
import StyledButton from '@components/shared/Button'
import { fetchEmployeeTasks } from '../../mock/fetchEmployeeTasks'
import Modal from '@components/shared/Modal'
import ModalContents from './ModalContents'
import EditModal from './EditModalContents'
import deleteEmployeeTasks from '@mock/deleteEmployeeTasks'

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

export default function Schedule() {
  const [scheduleItems, setScheduleItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(null)
  const [editingTask, setEditingTask] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'
        const tasks = await fetchEmployeeTasks(employeeId)
        const formattedTasks = tasks.map((task) => ({
          ...task,
          color: getDivisionColor(task.division),
        }))
        formattedTasks.sort((a, b) => a.time.getTime() - b.time.getTime())
        setScheduleItems(formattedTasks)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  const handleTaskAdded = (newTask) => {
    setScheduleItems((prev) => {
      const updatedItems = [...prev, { ...newTask, color: getDivisionColor(newTask.division) }]
      return updatedItems.sort((a, b) => a.time.getTime() - b.time.getTime())
    })
  }

  const handleEditClick = (task) => {
    setEditingTask(task)
    setIsEditModalOpen(true)
    console.log('Edit button clicked, task:', task)
  }

  const handleTaskUpdated = (taskId, updatedTask) => {
    setScheduleItems((prev) =>
      prev.map((item) =>
        item.id === taskId
          ? { ...item, ...updatedTask, color: getDivisionColor(updatedTask.division) }
          : item
      )
    )
    setEditingTask(null)
    setIsEditModalOpen(false)
  }

  const handleDeleteClick = async (taskId) => {
    if (window.confirm('정말로 이 일정을 삭제하시겠습니까?')) {
      try {
        await deleteEmployeeTasks('Zrghj2Jf3CVwQ7jSOmjCXYBBlek1', taskId)
        setScheduleItems((prev) => prev.filter((item) => item.id !== taskId))
      } catch (error) {
        console.error('Error deleting task:', error)
        alert('일정 삭제 중 오류가 발생했습니다.')
      }
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

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <ScheduleContainer>
      <Title>오늘의 할 일</Title>
      <ScheduleList>
        {scheduleItems.map((item, index) => (
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

const ScheduleContainer = styled(ShadowyBox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 45px;
  align-items: flex-start;
  width: 32%;
  margin-bottom: 10px;
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
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
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
