import styled from 'styled-components'

const Flex = styled.div(
  ({ $align = 'center', $justify = 'center', $direction = 'row', $gap = 0 }) => ({
    display: 'flex',
    alignItems: $align,
    justifyContent: $justify,
    flexDirection: $direction,
    gap: $gap,
  })
)

export default Flex
