import React from 'react'
import styled from 'styled-components'
import Flex from '@components/shared/Flex'

const ContentRow = ({ items, keys, customRenderers }) => {
  return (
    <GridContainer $count={keys.length}>
      {items.map((item, index) =>
        keys.map((key) => (
          <GridContent $align="center" $justify="flex-start" $gap="3px" key={`${index}-${key}`}>
            {customRenderers && customRenderers[key]
              ? React.createElement(customRenderers[key], item)
              : item[key]}
          </GridContent>
        ))
      )}
    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `2fr repeat(${props.$count - 1}, 1fr)`};
  gap: 10px;
  border-bottom: 1px solid #e2e8f0;
`

const GridContent = styled(Flex)`
  font-weight: bold;
  position: relative;
  padding: 5px 0;
`

export default ContentRow
