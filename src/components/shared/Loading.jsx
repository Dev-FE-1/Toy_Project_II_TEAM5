import styled from 'styled-components'
import Flex from './Flex'

function Loading() {
  return <Container>Loading</Container>
}

const Container = styled(Flex)`
  width: 30px;
  height: 30px;
  font-weight: bold;
`
export default Loading
