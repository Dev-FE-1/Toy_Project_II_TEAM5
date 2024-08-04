import styled, { keyframes } from 'styled-components'
import Flex from './Flex'
import PillIcon from '@assets/icons/pill.svg'

function Loading() {
  return (
    <Container>
      <img src={PillIcon} alt="pill" />
      <span>Loading...</span>
    </Container>
  )
}

const rotate = keyframes`
 from {
  transform: rotate(0deg)
 }
  to {
   transform: rotate(360deg);
  }
 `

const Container = styled(Flex)`
  flex-direction: column;
  gap: 40px;
  width: 200px;
  & img {
    width: 100%;
    display: block;
    animation: ${rotate} 1.2s ease 0s infinite;
  }
  & span {
    display: inline;
    font-size: 48px;
    font-weight: bold;
  }
`

export default Loading
