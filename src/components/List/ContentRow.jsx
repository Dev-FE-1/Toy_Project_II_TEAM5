import React from 'react'
import styled from 'styled-components'
import Flex from '@components/shared/Flex'

function ContentRow({ items, keys, customRenderers }) {
  return (
    <GridWrap $justify="space-evenly" $direction="column">
      {items.map((item, index) => (
        <GridContainer $count={keys.length} key={index}>
          {keys.map((key) => (
            <GridContent $align="center" $justify="flex-start" $gap="3px" key={`${index}-${key}`}>
              {customRenderers && customRenderers[key]
                ? React.createElement(customRenderers[key], item)
                : item[key]}
            </GridContent>
          ))}
        </GridContainer>
      ))}
    </GridWrap>
  )
}

const GridWrap = styled(Flex)`
  height: 100%;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `2fr repeat(${props.$count - 1}, 1fr)`};
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #f3f7fb;
`

const GridContent = styled(Flex)`
  font-weight: bold;
  position: relative;
  padding: 5px 0;
  overflow: hidden;
  height: 100%;
`

export default ContentRow
