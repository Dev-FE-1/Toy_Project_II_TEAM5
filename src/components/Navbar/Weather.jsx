import Flex from '@components/shared/Flex'
import { colors } from '@styles/Colors'
import styled from 'styled-components'
import Thunder from '@assets/icons/thunder.svg'

function Weather() {
  return (
    <Container $gap="20px">
      <Message>July, 23</Message>
      <img src={Thunder} alt="날씨" />
      <Message>
        21<sup>o</sup>
      </Message>
    </Container>
  )
}

const Container = styled(Flex)`
  width: 100%;
  /* padding: 16px 0; */
  background: linear-gradient(to top right, #47bfdf, #4a91ff);
  color: ${colors.white};
  font-weight: bold;
  border-radius: 14px;
`
const Message = styled.span`
  display: inline-block;
  font-weight: bold;
  & sup {
    vertical-align: super;
    font-size: smaller;
  }
`

export default Weather
