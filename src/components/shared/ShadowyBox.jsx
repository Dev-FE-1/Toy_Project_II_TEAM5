import styled from 'styled-components'
import { useColorMode } from '@chakra-ui/react'

const ShadowyBox = styled.div(
  ({
    $radius = '15px',
    $boxShadowLight = '0 3.5px 5.5px rgba(0, 0, 0, 0.1)',
    $boxShadowDark = '0 3.5px 5.5px rgba(255, 255, 255, 0.1)',
    $padding = '30px 20px',
    $marginB = '10px',
  }) => {
    const { colorMode } = useColorMode()

    return {
      background: colorMode === 'light' ? '#fff' : '#2D3748',
      overflow: 'hidden',
      borderRadius: $radius,
      boxShadow: colorMode === 'light' ? $boxShadowLight : $boxShadowDark,
      padding: $padding,
      marginBottom: $marginB,
    }
  }
)

export default ShadowyBox
