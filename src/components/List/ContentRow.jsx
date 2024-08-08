import React from 'react'
import styled from 'styled-components'
import Flex from '@components/shared/Flex'
import { useColorMode } from '@chakra-ui/react'

function ContentRow({ items, keys, customRenderers }) {
  const { colorMode } = useColorMode()

  return (
    <GridWrap colorMode={colorMode}>
      {items.map((item, index) => (
        <GridContainer $count={keys.length} colorMode={colorMode} key={index}>
          {keys.map((key) => (
            <GridContent
              $align="center"
              $justify="flex-start"
              $gap="3px"
              colorMode={colorMode}
              key={`${index}-${key}`}
            >
              {customRenderers && customRenderers[key]
                ? React.createElement(customRenderers[key], { item })
                : item[key]}
            </GridContent>
          ))}
        </GridContainer>
      ))}
    </GridWrap>
  )
}

const GridWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `2fr repeat(${props.$count - 1}, 1fr)`};
  gap: 10px;
  border-bottom: 1px solid ${({ colorMode }) => (colorMode === 'light' ? '#f3f7fb' : '#4A5568')};
  height: 100%;
  background-color: ${({ colorMode }) => (colorMode === 'light' ? '#fff' : '#2D3748')};
  color: ${({ colorMode }) => (colorMode === 'light' ? '#000' : '#fff')};
`

const GridContent = styled(Flex)`
  font-weight: bold;
  position: relative;
  padding: 5px 0;
  overflow: hidden;
  height: 100%;
  color: ${({ colorMode }) => (colorMode === 'light' ? '#000' : '#fff')};
`

export default ContentRow
