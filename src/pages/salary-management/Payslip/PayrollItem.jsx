import styled from 'styled-components'

const PayrollItem = ({ label, value }) => (
  <PayrollItemContainer>
    <PayrollLabel>{label}</PayrollLabel>
    <PayrollValue>{value}</PayrollValue>
  </PayrollItemContainer>
)

export default PayrollItem

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
