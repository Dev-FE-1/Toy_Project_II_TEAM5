import { useColorMode } from '@chakra-ui/react'
import styled from 'styled-components'

const PayrollTotal = ({ totalPay }) => {
  const { colorMode } = useColorMode()

  return (
    <PayrollTotalContainer $colorMode={colorMode}>
      <span>지급 합계</span>
      <span>{totalPay.toLocaleString()} 원</span>
    </PayrollTotalContainer>
  )
}

const PayrollTotalContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $colorMode }) => ($colorMode === 'light' ? '#f8fffe' : '#2D3748')};
  padding: 8px 40px;
  font-weight: bold;
  color: ${({ $colorMode }) => ($colorMode === 'light' ? '#000' : '#fff')};
`

export default PayrollTotal
