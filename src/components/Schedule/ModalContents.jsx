import { useState, useContext } from 'react'
import styled from 'styled-components'
import { ModalContext } from '../shared/Modal'
import Flex from '@components/shared/Flex'
import Horizon from '@components/shared/Horizon'
import addEmployeeTasks from '@mock/addEmployeeTasks'

const categories = [
  { name: 'Meeting', color: 'rgba(255, 59, 59, 0.5)' },
  { name: 'Report', color: 'rgb(198, 198, 198)' },
  { name: 'Prepare', color: 'rgba(255, 150, 27, 0.5)' },
  { name: 'External', color: 'rgba(0, 133, 255, 0.5)' },
]

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

export default function ModalContents({ employeeId, onTaskAdded }) {
  // const [selectedColor, setSelectedColor] = useState('')
  const [taskData, setTaskData] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    task: '',
    status: '진행중',
    division: '',
  })
  const { setIsOpen } = useContext(ModalContext)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTaskData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (!taskData.task) {
      alert('할 일을 입력해주세요.')
      return
    }
    const newTask = {
      task: taskData.task,
      time: new Date(taskData.year, taskData.month - 1, taskData.day),
      status: taskData.status,
      division: taskData.division,
      // division: taskData.division || getCategoryNameByColor(selectedColor),
    }
    console.log('New Task Data:', newTask)
    try {
      const taskId = await addEmployeeTasks(employeeId, newTask)
      console.log('Added Task ID:', taskId)
      onTaskAdded({ id: taskId, ...newTask, color: getDivisionColor(newTask.division) })
      setIsOpen(false)
    } catch (error) {
      console.error('Error adding task:', error)
      alert('작업 추가 중 오류가 발생했습니다.')
    }
  }

  // const getCategoryNameByColor = (color) => {
  //   const category = categories.find((cat) => cat.color === color)
  //   return category ? category.name : ''
  // }

  return (
    <Form>
      <Flex $justify="space-between">
        <ModalTitle>일정 추가</ModalTitle>
        {/* <Category setSelectedColor={setSelectedColor} /> */}
      </Flex>
      <Horizon $width="558px" $ml="20px" />
      <Contents
        // selectedColor={selectedColor}
        taskData={taskData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit} // Ensure handleSubmit is passed here
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

// function Category({ setSelectedColor }) {
//   return (
//     <Box $justify="space-between">
//       {categories.map((category) => (
//         <ColorBlock
//           key={category.name}
//           $name={category.name}
//           $color={category.color}
//           onClick={() => setSelectedColor(category.color)}
//         />
//       ))}
//     </Box>
//   )
// }
// const Box = styled(Flex)`
//   border: 1px solid #eceff5;
//   width: 40%;
//   border-radius: 5px;
//   padding: 5px 8px;
//   margin-top: 8px;
//   margin-right: 41px;
// `

// function ColorBlock({ $color, $name, onClick }) {
//   return (
//     <ColorBox $direction="column" onClick={onClick}>
//       <ColorPin $color={$color}></ColorPin>
//       <ColorText $color={$color}>{$name}</ColorText>
//     </ColorBox>
//   )
// }

// const ColorBox = styled(Flex)`
//   background: #f9f9fa;
//   border-radius: 5px;
//   padding: 5px;
//   cursor: pointer;
//   transition: 0.2s;
//   &:hover {
//     box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.05);
//   }
// `

// const ColorPin = styled.div`
//   width: 15px;
//   height: 15px;
//   border-radius: 50%;
//   background: ${(props) => props.$color};
//   margin-bottom: 8px;
// `

// const ColorText = styled.div`
//   color: ${(props) => props.$color};
// `

function Contents({ selectedColor, taskData, handleInputChange, handleSubmit }) {
  const { setIsOpen } = useContext(ModalContext)

  function DateSelect({ name, value, onChange, data }) {
    return (
      <Select name={name} value={value} onChange={onChange}>
        {data.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </Select>
    )
  }

  const years = Array.from({ length: 10 }, (_, i) => 2024 + i)
  const months = Array.from({ length: 12 }, (_, i) => 1 + i)
  const days = Array.from({ length: 31 }, (_, i) => 1 + i)
  const hours = Array.from({ length: 24 }, (_, i) => i)
  const minutes = Array.from({ length: 60 }, (_, i) => i)

  function SubmitButton({ children, onClick }) {
    return <Button onClick={onClick}>{children}</Button>
  }

  return (
    <Container>
      <Title>날짜</Title>
      <Content>
        <Flex $gap="60px" $justify="flex-start">
          <DateSelect name="year" value={taskData.year} onChange={handleInputChange} data={years} />
          <DateSelect
            name="month"
            value={taskData.month}
            onChange={handleInputChange}
            data={months}
          />
          <DateSelect name="day" value={taskData.day} onChange={handleInputChange} data={days} />
        </Flex>
      </Content>
      <Title>시간</Title>
      <Content>
        <Flex $gap="60px" $justify="flex-start">
          <DateSelect name="hour" value={taskData.hour} onChange={handleInputChange} data={hours} />
          :
          <DateSelect
            name="minute"
            value={taskData.minute}
            onChange={handleInputChange}
            data={minutes}
          />
        </Flex>
      </Content>
      <Title>
        할 일<CategoryCircle $selectedColor={selectedColor}></CategoryCircle>
      </Title>
      <div>
        <Input name="task" value={taskData.task} onChange={handleInputChange} />
      </div>
      <Flex $justify="space-around">
        <Flex $direction="column" $gap="15px">
          <Title>상태</Title>
          <Select name="status" value={taskData.status} onChange={handleInputChange}>
            <option value="진행중">진행중</option>
            <option value="완료함">완료함</option>
            <option value="취소됨">취소됨</option>
          </Select>
        </Flex>
        <Flex $direction="column" $gap="15px">
          <Title>구분</Title>
          <Select name="division" value={taskData.division} onChange={handleInputChange}>
            <option value="">선택</option>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
      <Flex>
        <SubmitButton onClick={() => setIsOpen(false)}>취소</SubmitButton>
        <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
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

const Content = styled.div`
  margin: 15px 0 25px;
`

const Select = styled.select`
  width: 160px;
  height: 40px;
  box-sizing: border-box;
  padding: 5px 12px;
  border: 1px solid #eceff5;
  outline: none;

  &span {
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
  margin: 15px 0 25px;
  padding: 0 5px;
  font-size: 18px;
`

const CategoryCircle = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
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
