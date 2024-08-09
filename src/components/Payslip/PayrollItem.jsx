import styled from 'styled-components'

const PayrollItem = ({ label, value, formula }) => (
  <PayrollItemContainer>
    <PayrollLabel>{label}</PayrollLabel>
    <PayrollValue>{value}</PayrollValue>
    {formula && <Formula>{formula}</Formula>}
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

  position: relative;
  &:hover > div:last-child {
    display: block;
  }
`

const PayrollLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
`

const PayrollValue = styled.div`
  font-size: 16px;
`
const Formula = styled.div`
  display: none;
  position: absolute;
  bottom: 0px;
  left: 40px;
  font-size: 12px;
  color: #555;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 4px;
  white-space: nowrap;
`
