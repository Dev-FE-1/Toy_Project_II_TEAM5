import styled from 'styled-components'
import HeaderRow from './HeaderRow'
import ContentRow from './ContentRow'

function ListComponent({ title, headers, items, keys, customRenderers }) {
  if (!headers || !items || !keys) return null
  return (
    <>
      <Title>{title}</Title>
      <div>
        {/* <GridContainer $count={headers.length}>
          {headers.map((header, index) => (
            <GridHeader key={index}>{header}</GridHeader>
          ))}
        </GridContainer> */}
        <HeaderRow headers={headers} />
        {/* <GridContainer $count={keys.length}>
          {items.map((item, index) =>
            keys.map((key) => (
              <GridContent $align="center" $justify="flex-start" $gap="3px" key={`${index}-${key}`}>
                {customRenderers && customRenderers[key]
                  ? React.createElement(customRenderers[key], item)
                  : item[key]}
              </GridContent>
            ))
          )}
        </GridContainer> */}
        <ContentRow items={items} keys={keys} customRenderers={customRenderers} />
      </div>
    </>
  )
}

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
`

export default ListComponent
