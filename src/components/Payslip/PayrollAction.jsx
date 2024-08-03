import styled from 'styled-components'
import Modal, { ModalContext } from '@components/shared/Modal'
import Flex from '@components/shared/Flex'
import Horizon from '@components/shared/Horizon'
import { useContext } from 'react'
import StyledButton from '@components/shared/Button'
import { colors } from '@styles/Colors'

const PayrollActions = () => (
  <Actions>
    <Modal Trigger={RequestTrigger}>
      <RequestModalContents />
    </Modal>
    <Modal Trigger={CorrectionTrigger}>
      <CorrectionModalContents />
    </Modal>
  </Actions>
)

function RequestTrigger({ onClick }) {
  return (
    <StyledButton
      onClick={onClick}
      text="정정 신청"
      $backgroundColor={colors.primary_200}
      $hoverColor={colors.primary_300}
      margin="0 18px 0 0"
    />
  )
}

function CorrectionTrigger({ onClick }) {
  return (
    <StyledButton
      onClick={onClick}
      text="정정 내역"
      $backgroundColor={colors.primary_400}
      $hoverColor={colors.primary_500}
    />
  )
}

const Actions = styled.div`
  display: flex;
  justify-content: center;
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

function RequestModalContents() {
  return (
    <Form>
      <ModalTitle>정정 신청</ModalTitle>
      <Horizon $width="558px" $ml="20px" />
      <Contents />
    </Form>
  )
}

function CorrectionModalContents() {
  return (
    <Form>
      <ModalTitle>정정 내역</ModalTitle>
      <Horizon $width="558px" $ml="20px" />
      <Contents />
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

function Contents() {
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
      <Title>내용</Title>
      <TextArea />
      <Flex>
        <SubmitButton>완료</SubmitButton>
      </Flex>
    </Container>
  )
}

export default PayrollActions
