import styled, { css } from 'styled-components'
import Modal from '../../components/shared/Modal'
import Flex from '../../components/shared/Flex'

function HomePage() {
  return (
    <Modal trigger={<Trigger>정정신청</Trigger>}>
      <ModalContents />
    </Modal>
  )
}

function Trigger({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>
}

const Button = styled.button`
  width: 94px;
  height: 32px;
  box-sizing: border-box;
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
  return (
    <Form>
      <Title>정정 신청</Title>
      <Horizon />
      <Contents></Contents>
    </Form>
  )
}

const Form = styled.div`
  background-color: white;
  width: 800px;
  height: 600px;
  border-radius: 15px;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  padding-left: 41px;
`

const Horizon = styled.hr`
  width: 558px;
  margin-left: 20px;
  border-image: linear-gradient(to left, white, #e0e1e2 50%, white 100%) 1;
`

function Contents() {
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
  `

  const Content = styled.div`
    margin: 25px 0 30px;
  `

  const Select = styled.select`
    width: 160px;
    height: 40px;
    box-sizing: border-box;
    padding: 12px;
    padding-left: 10px;
    border: 1px solid #eceff5;
    outline: none;
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

  const years = Array.from({ length: 10 }, (_, i) => 2020 + i)
  const months = Array.from({ length: 12 }, (_, i) => 1 + i)
  const days = Array.from({ length: 31 }, (_, i) => 1 + i)

  const TextArea = styled.textarea`
    width: 100%;
    height: 190px;
    resize: none;
    border: 1px solid #eceff5;
    outline: none;
    margin-top: 25px;
    margin-bottom: 20px;
    font-size: 20px;
  `

  return (
    <Container>
      <Title>날짜</Title>
      <Content>
        <Flex gap="60px" justify="flex-start">
          <DateSelect data={years} />
          <DateSelect data={months} />
          <DateSelect data={days} />
        </Flex>
      </Content>
      <Title>내용</Title>
      <TextArea />
      <Flex>
        <Button>완료</Button>
      </Flex>
    </Container>
  )
}

export default HomePage
