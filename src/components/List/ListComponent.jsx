import React from 'react'
import styled from 'styled-components'
import Flex from '@components/shared/Flex'

function ListComponent({ title, headers, items, keys, customRenderers }) {
  if (!headers || !items || !keys) return null
  return (
    <>
      <Title>{title}</Title>
      <div className="grid-container">
        <GridContainer $count={headers.length}>
          {headers.map((header, index) => (
            <GridHeader key={index}>{header}</GridHeader>
          ))}
        </GridContainer>
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
      </div>
    </>
  )
}

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `2fr repeat(${props.$count - 1}, 1fr)`};
  gap: 10px;
`

const GridHeader = styled.div`
  color: #a0aec0;
  font-size: 0.9em;
  padding: 10px;
`

const GridContent = styled(Flex)`
  font-weight: bold;
  position: relative;
  padding: 5px 0;
`

export default ListComponent
