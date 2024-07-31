import styled from 'styled-components'
// import { colors } from '@styles/Colors'
import PayrollItem from './PayrollItem'
import PayrollTotal from './PayrollTotal'
// import Flex from '@components/shared/Flex'
// import Horizon from '@components/shared/Horizon'
// import Modal, { ModalContext } from '@components/shared/Modal'
// import { useContext } from 'react'
import PayrollActions from './PayrollAction'

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
      <PayrollActions />
    </PayslipContainer>
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
