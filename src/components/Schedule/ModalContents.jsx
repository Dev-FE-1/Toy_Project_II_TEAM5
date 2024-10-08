import { useState, useContext } from 'react'
import styled from 'styled-components'
import { ModalContext } from '../shared/Modal'
import Flex from '@components/shared/Flex'
import Horizon from '@components/shared/Horizon'
import { useDispatch } from 'react-redux'
import { addTask } from '@reducers/taskSlice'
import { CalendarContext } from '@components/Container/calendar-context'
import { DIVISION_COLORS } from '@constants/Task'
import DateSelect from '@components/shared/DateSelect'
import { getYears, getMonths, getDays, getHours, getMinutes } from '@utils/getDateTime'
import getCompletionValue from '@utils/getCompletionValue'

export default function ModalContents({ employeeId, onTaskAdded }) {
  const { year, month, day } = useContext(CalendarContext)
  const dispatch = useDispatch()
  const [selectedColor, setSelectedColor] = useState('')
  const [taskData, setTaskData] = useState({
    year,
    month: month + 1,
    day: day.toString().padStart(2, '0'),
    hour: new Date().getHours().toString().padStart(2, '0'),
    minute: (Math.round(new Date().getMinutes() / 10) * 10).toString().padStart(2, '0'),
    task: '',
    status: '진행중',
    division: '',
  })
  const { setIsOpen } = useContext(ModalContext)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTaskData((prev) => ({ ...prev, [name]: value }))
    if (name === 'division') {
      const selectedColor = DIVISION_COLORS[value] || 'transparent'
      setSelectedColor(selectedColor)
    }
  }

  const handleSubmit = async () => {
    if (!taskData.task) {
      alert('할 일을 입력해주세요.')
      return
    } else if (!taskData.division) {
      alert('구분을 선택해주세요.')
      return
    }
    const dateString = `${taskData.year}.${taskData.month}.${taskData.day}`
    const timeString = `${taskData.hour}:${taskData.minute}`
    const newTask = {
      title: taskData.task,
      time: timeString,
      date: dateString,
      status: taskData.status,
      division: taskData.division,
      completion: getCompletionValue(taskData.status),
    }

    try {
      const actionResult = await dispatch(
        addTask({
          employeeId,
          month: taskData.month,
          day: taskData.day,
          taskData: newTask,
        })
      ).unwrap()

      onTaskAdded({ id: actionResult.id, ...newTask, color: DIVISION_COLORS[newTask.division] })
      setIsOpen(false)
    } catch (error) {
      console.error('Error adding task:', error)
      alert('작업 추가 중 오류가 발생했습니다.')
    }
  }

  return (
    <Form>
      <Flex $justify="space-between">
        <ModalTitle>일정 추가</ModalTitle>
      </Flex>
      <Horizon $width="558px" $ml="20px" />
      <Contents
        selectedColor={selectedColor}
        taskData={taskData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Form>
  )
}

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

function Contents({ selectedColor, taskData, handleInputChange, handleSubmit }) {
  const { setIsOpen } = useContext(ModalContext)

  function SubmitButton({ children, onClick }) {
    return <Button onClick={onClick}>{children}</Button>
  }

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
            data={getHours()}
          />
          :
          <DateSelect
            name="minute"
            value={taskData.minute}
            onChange={handleInputChange}
            data={getMinutes()}
          />
        </Flex>
      </Content>
      <Title>
        할 일<CategoryCircle $selectedColor={selectedColor}></CategoryCircle>
      </Title>
      <Input name="task" value={taskData.task} onChange={handleInputChange} />
      <Flex $justify="space-between">
        <Half $gap="15px">
          <FlexTitle>상태</FlexTitle>
          <Select name="status" value={taskData.status} onChange={handleInputChange}>
            <option value="진행중">진행중</option>
            <option value="완료됨">완료됨</option>
            <option value="취소됨">취소됨</option>
          </Select>
        </Half>
        <Half $gap="15px">
          <FlexTitle>구분</FlexTitle>
          <Select name="division" value={taskData.division} onChange={handleInputChange}>
            <option value="">선택</option>
            {Object.keys(DIVISION_COLORS).map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </Select>
        </Half>
      </Flex>
      <Flex>
        <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
        <SubmitButton onClick={() => setIsOpen(false)}>취소</SubmitButton>
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
