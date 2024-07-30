import styled from 'styled-components'
import { colors } from '@styles/Colors'

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

  const PayrollItem = ({ label, value }) => (
    <PayrollItemContainer>
      <PayrollLabel>{label}</PayrollLabel>
      <PayrollValue>{value}</PayrollValue>
    </PayrollItemContainer>
  )

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
        <PayrollTotal>
          <span>지급 합계</span>
          <span>{payrollData.totalPay.toLocaleString()} 원</span>
        </PayrollTotal>
      </DetailContainer>
      <PayrollActions>
        <ApplyButton>정정 신청</ApplyButton>
        <HistoryButton>정정 내역</HistoryButton>
      </PayrollActions>
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

const PayrollItemContainer = styled.div`
  font-size: 16px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px 40px;
  border-bottom: 1px solid #e0e0e0;

  &:hover {
    background-color: #f8fffe;
    text-decoration: underline;
  }
`

const PayrollLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
`

const PayrollValue = styled.div`
  font-size: 16px;
`

const PayrollTotal = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8fffe;
  padding: 8px 40px;
  font-weight: bold;
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
  color: #ffffff;
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
