import ShadowyBox from '@components/shared/ShadowyBox'
import styled from 'styled-components'
import PayrollActions from './PayrollAction'
import PayrollItem from './PayrollItem'
import PayrollTotal from './PayrollTotal'

export default function Payslip({ month, overTime }) {
  const overtimeRate = 15822
  const overtimeMultiplier = 1.5
  const overtimePay = Math.ceil(overTime * overtimeRate * overtimeMultiplier)
  const overtimeFormula = `연장 근무 시간(${overTime}시간) * 통상 시급(${overtimeRate.toLocaleString()}원) * ${overtimeMultiplier}`

  const bonusOptions = [200000, 500000, 700000]
  const randomBonus = bonusOptions[Math.floor(Math.random() * bonusOptions.length)]

  const payrollData = {
    month: month,
    baseSalary: 3500000,
    mealAllowance: 300000,
    overtime: overTime,
    overtimePay,
    longevityAllowance: 200000,
    bonus: randomBonus,
    get totalPay() {
      return (
        this.baseSalary +
        this.mealAllowance +
        this.overtimePay +
        this.longevityAllowance +
        this.bonus
      )
    },
  }

  return (
    <PayslipContainer>
      <TitleContainer>
        <Title>급여 지급내역</Title>
        <Month>{payrollData.month}월</Month>
      </TitleContainer>
      <DetailContainer>
        {[
          { label: '기본급', value: payrollData.baseSalary },
          { label: '연장수당', value: payrollData.overtimePay, formula: overtimeFormula },
          { label: '근속수당', value: payrollData.longevityAllowance },
          { label: '식대', value: payrollData.mealAllowance },
          { label: '상여금', value: payrollData.bonus },
        ].map((item) => (
          <PayrollItem
            key={item.label}
            label={item.label}
            value={`${item.value.toLocaleString()} 원`}
            formula={item.formula}
          />
        ))}
        <PayrollTotal totalPay={payrollData.totalPay.toLocaleString()} />
      </DetailContainer>
      <PayrollActions />
    </PayslipContainer>
  )
}

const PayslipContainer = styled(ShadowyBox)`
  display: flex;
  flex-direction: column;
  width: 32%;
  padding: 45px;
  padding: 25px 16px;
  margin-bottom: 10px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`
