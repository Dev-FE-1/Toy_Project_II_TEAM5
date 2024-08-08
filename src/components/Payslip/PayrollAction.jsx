import styled from 'styled-components'
import RequestTrigger from './RequestTrigger'
import CorrectionTrigger from './CorrectionTrigger'

const PayrollActions = () => (
  <Actions>
    <RequestTrigger />
    <CorrectionTrigger />
  </Actions>
)

const Actions = styled.div`
  display: flex;
  justify-content: center;
`

export default PayrollActions
