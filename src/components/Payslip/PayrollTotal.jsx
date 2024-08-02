import styled from 'styled-components'

const PayrollTotal = ({ totalPay }) => (
  <PayrollTotalContainer>
    <span>지급 합계</span>
    <span>{totalPay.toLocaleString()} 원</span>
  </PayrollTotalContainer>
)

export default PayrollTotal

const PayrollTotalContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8fffe;
  padding: 8px 40px;
  font-weight: bold;
`
