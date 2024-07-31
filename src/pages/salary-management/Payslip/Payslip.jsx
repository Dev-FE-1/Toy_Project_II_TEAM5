import styled from 'styled-components'
import { colors } from '@styles/Colors'
import PayrollItem from './PayrollItem'
import PayrollTotal from './PayrollTotal'
import Flex from '@components/shared/Flex'
import Horizon from '@components/shared/Horizon'
import Modal, { ModalContext } from '@components/shared/Modal'
import { useContext } from 'react'

export default function Payslip() {
  const payrollData = {
    month: 7,
    baseSalary: 3500000,
    mealAllowance: 100000,
    overtimePay: 120000,
    longevityAllowance: 80000,
    bonus: 200000,
    totalPay: 3800000,
  }

  return (
    <PayslipContainer>
      <TitleContainer>
        <Title>급여 지급내역</Title>
        <Month>{payrollData.month}월</Month>
      </TitleContainer>
      <DetailContainer>
        <PayrollItem label="기본급" value={`${payrollData.baseSalary?.toLocaleString()} 원`} />
        <PayrollItem label="연장수당" value={`${payrollData.overtimePay.toLocaleString()} 원`} />
        <PayrollItem
          label="근속수당"
          value={`${payrollData.longevityAllowance.toLocaleString()} 원`}
        />
        <PayrollItem label="식대" value={`${payrollData.mealAllowance.toLocaleString()} 원`} />
        <PayrollItem label="상여금" value={`${payrollData.bonus.toLocaleString()} 원`} />
        <PayrollTotal totalPay={payrollData.totalPay} />
      </DetailContainer>
      <PayrollActions>
        <Modal Trigger={Trigger}>
          <ModalContents />
        </Modal>
        {/* <ApplyButton>정정 신청</ApplyButton> */}
        <HistoryButton>정정 내역</HistoryButton>
      </PayrollActions>
    </PayslipContainer>
  )
}

function Trigger({ onClick }) {
  return <ApplyButton onClick={onClick}>정정 신청</ApplyButton>
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
  return (
    <Form>
      <ModalTitle>정정 신청</ModalTitle>
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

const PayslipContainer = styled.div`
  width: 573px;
  height: 868px;
  border: 1px solid #e0e0e0;
  padding: 25px 16px;
  border-radius: 20px;
  background-color: #ffffff;
`

const TitleContainer = styled.div`
  padding: 20px;
  border-bottom: 2px solid #e0e0e0;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`

const Month = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 60px;
`

const DetailContainer = styled.div`
  width: 100%;
  height: 492px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 77px;
`

const PayrollActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

const ApplyButton = styled.button`
  font-weight: 500;
  padding: 9px 23.5px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.primary_200};
  color: ${colors.white};
  cursor: pointer;
  margin-right: 18px;

  &:hover {
    background-color: ${colors.primary_300};
  }
`

const HistoryButton = styled.button`
  font-weight: 500;
  padding: 9px 23.5px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.primary_400};
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary_500};
  }
`
