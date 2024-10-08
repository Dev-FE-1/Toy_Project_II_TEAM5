import styled from 'styled-components'

const Horizon = styled.hr`
  border-image: linear-gradient(to left, white, #e0e1e2 50%, white 100%) 1;
  width: ${({ $width }) => $width ?? '100%'};
  margin-left: ${({ $ml }) => $ml ?? 0};
`

export default Horizon
