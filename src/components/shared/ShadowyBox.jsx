import styled from 'styled-components'

const ShadowyBox = styled.div(
  ({
    $radius = '15px',
    $boxShadow = '0 3.5px 5.5px rgba(0, 0, 0, 0.1)',
    $padding = '20px 15px',
    $marginB = '10px',
  }) => ({
    background: '#fff',
    overflow: 'hidden',
    borderRadius: $radius,
    boxShadow: $boxShadow,
    padding: $padding,
    marginBottom: $marginB,
  })
)

export default ShadowyBox
