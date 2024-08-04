import { useContext } from 'react'
import styled from 'styled-components'
import { ModalContext } from '@components/shared/Modal'
import Flex from '@components/shared/Flex'
import Horizon from '@components/shared/Horizon'
import { colors } from '@styles/Colors'

function RequestModalContents() {
  const { setIsOpen } = useContext(ModalContext)

  const years = Array.from({ length: 10 }, (_, i) => 2020 + i)
  const months = Array.from({ length: 12 }, (_, i) => 1 + i)
  const days = Array.from({ length: 31 }, (_, i) => 1 + i)

  return (
    <Form>
      <ModalTitle>정정 신청</ModalTitle>
      <Horizon $width="558px" $ml="20px" />
      <Container>
        <Title>날짜</Title>
        <Content>
          <Flex $gap="60px" $justify="flex-start">
            <DateSelect data={years} />
            <DateSelect data={months} />
            <DateSelect data={days} />
          </Flex>
        </Content>
        <Title>내용</Title>
        <TextArea />
        <Flex>
          <SubmitButton onClick={() => setIsOpen(false)}>완료</SubmitButton>
        </Flex>
      </Container>
    </Form>
  )
}

function DateSelect({ data }) {
  return (
    <Select>
      {data.map((x) => (
        <option key={x}>{x}</option>
      ))}
    </Select>
  )
}

const Form = styled.div`
  background-color: ${colors.white};
  width: 800px;
  height: 600px;
  border-radius: 15px;
  padding: 10px;
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

const Container = styled.div`
  padding: 28px 40px;
`

const Title = styled.div`
  width: 100%;
  height: 55px;
  box-sizing: border-box;
  background-color: #effaf8;
  color: ${colors.black};
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
  cursor: pointer;

  &:hover {
    background-color: #00bcab;
  }
`

const SubmitButton = styled(Button)`
  background-color: #4fd1c5;
  &:hover {
    background-color: #00bcab;
  }
`

export default RequestModalContents
