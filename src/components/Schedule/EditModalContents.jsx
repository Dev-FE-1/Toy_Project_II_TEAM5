import { useState, useContext } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { ModalContext } from '../shared/Modal'
import Flex from '@components/shared/Flex'
import Horizon from '@components/shared/Horizon'
import { updateTask } from '@reducers/taskSlice'
import { DIVISION_COLORS } from '@constants/Task'
import DateSelect from '@components/shared/DateSelect'
import { getYears, getMonths, getDays, getHours, getMinutes } from '@utils/getDateTime'
import getCompletionValue from '@utils/getCompletionValue'

const EditModal = ({ employeeId, task, onTaskUpdated, onClose }) => {
  const { setIsOpen } = useContext(ModalContext)
  const dispatch = useDispatch()
  const [selectedColor, setSelectedColor] = useState(DIVISION_COLORS[task.division])
  const [hour, minute] = task.time.split(':')
  const [year, month, day] = task.date.split('.')
  const [taskData, setTaskData] = useState({
    year: year.toString(),
    month: month.toString(),
    day: day.toString(),
    hour: hour.padStart(2, '0'),
    minute: minute.padStart(2, '0'),
    title: task.title || '',
    status: task.status || '',
    division: task.division || '',
    completion: getCompletionValue(task.status),
  })
  console.log(task.date)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTaskData((prev) => {
      const updatedData = { ...prev, [name]: value }
      if (name === 'division') {
        const selectedColor = DIVISION_COLORS[value] || 'transparent'
        setSelectedColor(selectedColor)
      }
      if (name === 'status') {
        console.log('Status changed to:', value)
        updatedData.completion = getCompletionValue(value)
        console.log('Updated completion value:', updatedData.completion)
      }
      return updatedData
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmit called')
    const timeString = `${taskData.hour}:${taskData.minute}`
    const updatedTask = {
      title: taskData.title || '',
      time: timeString,
      status: taskData.status || '',
      division: taskData.division || '',
      completion: taskData.completion,
    }

    try {
      await dispatch(
        updateTask({
          employeeId,
          month: taskData.month,
          day: taskData.day,
          taskId: task.id,
          taskData: updatedTask,
        })
      ).unwrap()
      onTaskUpdated(task.id, updatedTask)
      setIsOpen(false)
      handleClose()
    } catch (error) {
      console.error('Error updating task:', error)
      alert('작업 수정 중 오류가 발생했습니다.')
    }
  }
  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <Form>
      <ModalTitle>일정 수정</ModalTitle>
      <Horizon $width="558px" $ml="20px" />
      <Contents
        selectedColor={selectedColor}
        taskData={taskData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        onClose={handleClose}
      />
    </Form>
  )
}

export default EditModal

const Form = styled.div`
  background-color: white;
  width: 800px;
  height: 600px;
  border-radius: 15px;
`

const ModalTitle = styled.h2`
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  font-size: 18px;
  font-weight: bold;
  padding-left: 41px;
`

function Contents({ selectedColor, taskData, handleInputChange, handleSubmit, onClose }) {
  return (
    <Container>
      <Title>날짜</Title>
      <Content>
        <Flex $gap="60px" $justify="flex-start">
          <DateSelect
            name="year"
            value={taskData.year}
            onChange={handleInputChange}
            data={getYears(2024, 10)}
          />
          <DateSelect
            name="month"
            value={taskData.month}
            onChange={handleInputChange}
            data={getMonths()}
          />
          <DateSelect
            name="day"
            value={taskData.day}
            onChange={handleInputChange}
            data={getDays()}
          />
        </Flex>
      </Content>
      <Title>시간</Title>
      <Content>
        <Flex $gap="60px" $justify="flex-start">
          <DateSelect
            name="hour"
            value={taskData.hour}
            onChange={handleInputChange}
            data={getHours().map((h) => h.toString().padStart(2, '0'))}
          />
          :
          <DateSelect
            name="minute"
            value={taskData.minute}
            onChange={handleInputChange}
            data={getMinutes().map((m) => m.toString().padStart(2, '0'))}
          />
        </Flex>
      </Content>
      <Title>
        할 일<CategoryCircle $selectedColor={selectedColor}></CategoryCircle>
      </Title>
      <Input name="title" value={taskData.title} onChange={handleInputChange} />
      <Flex $justify="space-between">
        <Half $gap="15px">
          <FlexTitle>상태</FlexTitle>
          <Select name="status" value={taskData.status} onChange={handleInputChange}>
            <option value="진행중">진행중</option>
            <option value="완료함">완료함</option>
            <option value="취소됨">취소됨</option>
          </Select>
        </Half>
        <Half $gap="15px">
          <FlexTitle>구분</FlexTitle>
          <Select name="division" value={taskData.division} onChange={handleInputChange}>
            {Object.keys(DIVISION_COLORS).map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </Select>
        </Half>
      </Flex>
      <Flex>
        <Button onClick={handleSubmit}>수정 완료</Button>
        <Button onClick={onClose}>취소</Button>
      </Flex>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px 40px;
`

const Title = styled.div`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background-color: #effaf8;
  color: black;
  font-weight: bold;
  line-height: 50px;
  padding-left: 20px;
  position: relative;
`

const Half = styled(Flex)`
  width: 45%;
`

const FlexTitle = styled.div`
  width: 50%;
  height: 50px;
  box-sizing: border-box;
  background-color: #effaf8;
  color: black;
  font-weight: bold;
  line-height: 50px;
  padding-left: 20px;
  position: relative;
`

const Content = styled.div`
  margin: 10px 0 20px;
`

const Select = styled.select`
  width: 160px;
  height: 50px;
  box-sizing: border-box;
  padding: 5px 12px;
  border: 1px solid #eceff5;
  outline: none;

  & span {
    width: 10px;
    height: 10px;
  }
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  resize: none;
  border: 1px solid #eceff5;
  outline: none;
  margin: 10px 0 20px;
  padding: 0 5px;
  font-size: 18px;
`

const CategoryCircle = styled.span`
  position: absolute;
  bottom: -40px;
  right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.$selectedColor};
`

const Button = styled.button`
  width: 94px;
  height: 32px;
  box-sizing: border-box;
  margin: 20px;
  margin-left: 40px;
  padding: 6px 8px;
  background-color: #4fd1c5;
  color: white;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #00bcab;
  }
`
