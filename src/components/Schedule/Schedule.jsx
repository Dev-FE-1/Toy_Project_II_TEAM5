import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import ScheduleItem from './ScheduleItem'
import ShadowyBox from '@components/shared/ShadowyBox'
import { colors } from '@styles/Colors'
import StyledButton from '@components/shared/Button'
import Modal, { ModalContext } from '@components/shared/Modal'
import Horizon from '@components/shared/Horizon'
import { fetchEmployeeTasks } from '../../mock/fetchEmployeeTasks'
import Flex from '@components/shared/Flex'

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
      <Title>오늘의 할 일</Title>
      <ScheduleList>
        {scheduleItems.map((item) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </ScheduleList>
      <ButtonContainer>
        <Modal Trigger={Trigger}>
          <ModalContents />
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
      margin="30px 0 0 0"
      onClick={onClick}
    />
  )
}

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

function ModalContents() {
  const [selectedColor, setSelectedColor] = useState('')
  return (
    <Form>
      <Flex $justify="space-between">
        <ModalTitle>일정 추가</ModalTitle>
        <Category setSelectedColor={setSelectedColor} />
      </Flex>
      <Horizon $width="558px" $ml="20px" />
      <Contents selectedColor={selectedColor}></Contents>
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

function Category({ setSelectedColor }) {
  const Box = styled(Flex)`
    border: 1px solid #eceff5;
    width: 40%;
    border-radius: 5px;
    padding: 5px 8px;
    margin-top: 8px;
    margin-right: 41px;
  `

  const categories = [
    { name: 'meeting', color: 'rgba(255, 59, 59, 0.5)' },
    { name: 'report', color: 'rgb(198, 198, 198)' },
    { name: 'prepare', color: 'rgba(255, 150, 27, 0.5)' },
    { name: 'external', color: 'rgba(0, 133, 255, 0.5)' },
  ]

  return (
    <Box $justify="space-between">
      {categories.map((category) => (
        <ColorBlock
          key={category.name}
          $name={category.name}
          $color={category.color}
          onClick={() => setSelectedColor(category.color)}
        />
      ))}
    </Box>
  )

  function ColorBlock({ $color, $name, onClick }) {
    const ColorBox = styled(Flex)`
      background: #f9f9fa;
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.05);
      }
    `

    const ColorPin = styled.div`
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: ${(props) => props.$color};
      margin-bottom: 8px;
    `

    const ColorText = styled.div`
      color: ${(props) => props.$color};
    `

    return (
      <ColorBox $direction="column" onClick={onClick}>
        <ColorPin $color={$color}></ColorPin>
        <ColorText $color={$color}>{$name}</ColorText>
      </ColorBox>
    )
  }
}

function Contents({ selectedColor }) {
  const { setIsOpen } = useContext(ModalContext)

  const Container = styled.div`
    padding: 28px 40px;
  `
  const Title = styled.div`
    width: 100%;
    height: 55px;
    box-sizing: border-box;
    background-color: #effaf8;
    color: black;
    font-weight: bold;
    line-height: 55px;
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
    padding: 12px;
    padding-left: 10px;
    border: 1px solid #eceff5;
    outline: none;

    &span {
      width: 10px;
      height: 10px;
    }
  `

  function DateSelect({ data }) {
    return (
      <Select>
        {data.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </Select>
    )
  }

  const years = Array.from({ length: 10 }, (_, i) => 2024 + i)
  const months = Array.from({ length: 12 }, (_, i) => 1 + i)
  const days = Array.from({ length: 31 }, (_, i) => 1 + i)

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
    background: ${selectedColor};
  `

  function SubmitButton({ children }) {
    const handleClick = () => {
      setIsOpen(false)
    }

    return <Button onClick={handleClick}>{children}</Button>
  }

  return (
    <Container>
      <Title>날짜</Title>
      <Content>
        <Flex $gap="60px" $justify="flex-start">
          <DateSelect data={years} />
          <DateSelect data={months} />
          <DateSelect data={days} />
        </Flex>
      </Content>
      <Title>
        할 일<CategoryCircle></CategoryCircle>
      </Title>
      <div>
        <Input />
        {/* <InputCircle></InputCircle> */}
      </div>
      <Flex $justify="space-around">
        <Flex $direction="column" $gap="15px">
          <Title>상태</Title>
          <Select></Select>
        </Flex>
        <Flex $direction="column" $gap="15px">
          <Title>상태</Title>
          <Select></Select>
        </Flex>
      </Flex>
      <Flex>
        <SubmitButton>취소</SubmitButton>
        <SubmitButton>완료</SubmitButton>
      </Flex>
    </Container>
  )
}
