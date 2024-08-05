import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ScheduleItem from './ScheduleItem'
import ShadowyBox from '@components/shared/ShadowyBox'
import { colors } from '@styles/Colors'
import StyledButton from '@components/shared/Button'
import { fetchEmployeeTasks } from '../../mock/fetchEmployeeTasks'
import Modal from '@components/shared/Modal'
import ModalContents from './ModalContents'

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

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const employeeId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1'
        const tasks = await fetchEmployeeTasks(employeeId)
        const formattedTasks = tasks.map((task) => ({
          ...task,
          color: getDivisionColor(task.division),
        }))
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
    setScheduleItems((prev) => [...prev, newTask])
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <ScheduleContainer>
      <Title>오늘의 할 일</Title>
      <ScheduleList>
        {scheduleItems.map((item) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </ScheduleList>
      <ButtonContainer>
        <Modal Trigger={Trigger}>
          <ModalContents employeeId="Zrghj2Jf3CVwQ7jSOmjCXYBBlek1" onTaskAdded={handleTaskAdded} />
        </Modal>
      </ButtonContainer>
    </ScheduleContainer>
  )
}

const ScheduleContainer = styled(ShadowyBox)`
  display: flex;
  flex-direction: column;
  padding: 45px;
  align-items: flex-start;
  width: 32%;
  margin-bottom: 10px;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`

const ScheduleList = styled.div`
  max-height: 570px;
  overflow-y: auto;
  width: 100%;
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
