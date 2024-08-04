import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ScheduleItem from './ScheduleItem'
import ShadowyBox from '@components/shared/ShadowyBox'
import { colors } from '@styles/Colors'
import StyledButton from '@components/shared/Button'
import { fetchEmployeeTasks } from '../../mock/fetchEmployeeTasks'

const getDivisionColor = (division) => {
  switch (division) {
    case 'meeting':
      return 'rgba(255, 59, 59, 0.5)'
    case 'prepare':
      return 'rgba(255, 150, 27, 0.5)'
    case 'external':
      return 'rgba(0, 133, 255, 0.5)'
    default:
      return 'rgb(232, 232, 232)'
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

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <ScheduleContainer>
      <Title>Today Schedule</Title>
      <ScheduleList>
        {scheduleItems.map((item) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </ScheduleList>
      <ButtonContainer>
        <StyledButton
          text="일정 추가"
          $backgroundColor={colors.primary_200}
          $hoverColor={colors.primary_300}
          margin="30px 0 0 0"
        />
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
  margin-bottom: 30px;
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
