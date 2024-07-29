import { colors } from '@styles/Colors'
import styled from 'styled-components'
import Flex from './Flex'

function IconWithBackground({ inverted, Icon }) {
  return (
    <Container $inverted={inverted}>
      <Icon color={inverted ? colors.white : colors.primary} />
    </Container>
  )
}

const Container = styled(Flex)`
  background-color: ${({ $inverted }) => ($inverted ? colors.primary : colors.white)};
  width: 30px;
  height: 30px;
  border-radius: 12px;
`
export default IconWithBackground
