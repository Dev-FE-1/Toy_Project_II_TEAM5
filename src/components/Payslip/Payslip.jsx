import { CalendarContext } from '@components/Container/calendar-context'
import ShadowyBox from '@components/shared/ShadowyBox'
import useAttendance from '@hooks/useAttandance'
import calcOverTime from '@utils/calcOverTime'
import { useContext } from 'react'
import styled from 'styled-components'
import PayrollActions from './PayrollAction'
import PayrollItem from './PayrollItem'
import PayrollTotal from './PayrollTotal'

const OVERTIME_RATE = 15822
const OVERTIME_MULTIPLIER = 1.5
const BONUS_OPTIONS = [200000, 500000, 700000]
const BASE_SALARY = 3500000
const MEAL_ALLOWANCE = 300000
const LONGEVITY_ALLOWANCE = 200000

function calculateOvertimePay(overTime) {
  return Math.ceil(overTime * OVERTIME_RATE * OVERTIME_MULTIPLIER)
}

function calculateTotalPay(baseSalary, mealAllowance, overtimePay, longevityAllowance, bonus) {
  return baseSalary + mealAllowance + overtimePay + longevityAllowance + bonus
}

function getRandomBonus(bonusOptions) {
  return bonusOptions[Math.floor(Math.random() * bonusOptions.length)]
}

function generatePayrollData(month, overTime) {
  const overtimePay = calculateOvertimePay(overTime)
  const randomBonus = getRandomBonus(BONUS_OPTIONS)

  return {
    month,
    baseSalary: BASE_SALARY,
    mealAllowance: MEAL_ALLOWANCE,
    overtime: overTime,
    overtimePay,
    longevityAllowance: LONGEVITY_ALLOWANCE,
    bonus: randomBonus,
    totalPay: calculateTotalPay(
      BASE_SALARY,
      MEAL_ALLOWANCE,
      overtimePay,
      LONGEVITY_ALLOWANCE,
      randomBonus
    ),
  }
}

function generatePayrollItems(payrollData, overtimeFormula) {
  return [
    { label: '기본급', value: payrollData.baseSalary },
    { label: '연장수당', value: payrollData.overtimePay, formula: overtimeFormula },
    { label: '근속수당', value: payrollData.longevityAllowance },
    { label: '식대', value: payrollData.mealAllowance },
    { label: '상여금', value: payrollData.bonus },
  ]
}

export default function Payslip() {
  const { year, month } = useContext(CalendarContext)
  const { data, status } = useAttendance({ month })

  const overTime = calcOverTime(data?.workTimeTable)
  const payrollData = generatePayrollData(month, overTime)
  const overtimeFormula = `연장 근무 시간(${overTime}시간) * 통상 시급(${OVERTIME_RATE.toLocaleString()}원) * ${OVERTIME_MULTIPLIER}`

  if (status === 'pending') return <PayslipContainer />

  const payrollItems = generatePayrollItems(payrollData, overtimeFormula)

  return (
    <PayslipContainer>
      <TitleContainer>
        <Title>급여 지급내역</Title>
        <Month>
          {year} 년 {month + 1}월
        </Month>
      </TitleContainer>
      <DetailContainer>
        {payrollItems.map((item) => (
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
  height: auto;
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
