import styled from 'styled-components'

export default function Payslip2() {
  const payrollData = {
    baseSalary: 3500000,
    totalHours: 219,
    regularHours: 144,
    overtime: 75,
    totalWorkdays: 18,
    bonus: 200000,
    totalPay: 3800000,
  }

  const employeeData = {
    name: '강호연',
    id: 102034,
    hireDate: 20150115,
    payDay: '2024년 8월 16일',
  }

  return (
    <PayslipContainer>
      <Title>급여 명세서</Title>
      <TitleContainer>
        <Company>
          <h1>(주) Revive</h1>
        </Company>
        <Detail>
          <EmployeeItem>
            <EmployeeLabel>임직원 이름:&nbsp;</EmployeeLabel>
            <EmployeeValue>{employeeData.name}</EmployeeValue>
          </EmployeeItem>
          <EmployeeItem>
            <EmployeeLabel>사원번호:&nbsp;</EmployeeLabel>
            <EmployeeValue>{employeeData.id}</EmployeeValue>
          </EmployeeItem>
          <EmployeeItem>
            <EmployeeLabel>입사일:&nbsp;</EmployeeLabel>
            <EmployeeValue>{employeeData.hireDate}</EmployeeValue>
          </EmployeeItem>
          <EmployeeItem>
            <EmployeeLabel>급여지급일:&nbsp;</EmployeeLabel>
            <EmployeeValue>{employeeData.payDay}</EmployeeValue>
          </EmployeeItem>
        </Detail>
      </TitleContainer>
      <DetailContainer>
        <PayrollItem>
          <PayrollLabel>총 근로일수</PayrollLabel>
          <PayrollValue>{payrollData.totalWorkdays.toLocaleString()} 일</PayrollValue>
        </PayrollItem>
        <PayrollItem>
          <PayrollLabel>정규 근로시간</PayrollLabel>
          <PayrollValue>{payrollData.regularHours?.toLocaleString()} 시간</PayrollValue>
        </PayrollItem>
        <PayrollItem>
          <PayrollLabel>연장 근로시간</PayrollLabel>
          <PayrollValue>{payrollData.overtime?.toLocaleString()} 시간</PayrollValue>
        </PayrollItem>
        <WorkHoursTotal>
          <span>총 근로시간</span>
          <span>{payrollData.totalHours?.toLocaleString()} 시간</span>
        </WorkHoursTotal>
        <PayrollItem>
          <PayrollLabel>상여금</PayrollLabel>
          <PayrollValue>{payrollData.bonus.toLocaleString()} 원</PayrollValue>
        </PayrollItem>
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

const Company = styled.div`
  margin-bottom: 20px;
`
const Detail = styled.div``
const EmployeeItem = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5px;
`
const EmployeeLabel = styled.div``
const EmployeeValue = styled.div``

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
  border-bottom: 1px solid #e0e0e0;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

const DetailContainer = styled.div`
  width: 100%;
  height: 492px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
`

const PayrollItem = styled.div`
  font-size: 16px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  border-bottom: 1px solid #e0e0e0;
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
  padding: 8px 20px;
  font-weight: bold;
`

const WorkHoursTotal = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8fffe;
  padding: 8px 20px;
  font-weight: bold;
  border-bottom: 2px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
`

const PayrollActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

const ApplyButton = styled.button`
  font-weight: bold;
  padding: 10px 23.5px;
  border: none;
  border-radius: 4px;
  background-color: #4fd1c5;
  color: #ffffff;
  cursor: pointer;
  margin-right: 18px;

  &:hover {
    background-color: #00bcab;
  }
`
const HistoryButton = styled.button`
  font-weight: bold;
  padding: 10px 23.5px;
  border: none;
  border-radius: 4px;
  background-color: #00ac98;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #00bcab;
  }
`
