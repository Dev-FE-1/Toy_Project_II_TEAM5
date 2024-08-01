import styled from 'styled-components'
import HeaderRow from './HeaderRow'
import ContentRow from './ContentRow'

function ListComponent({ title, headers, items, keys, customRenderers }) {
  if (!headers || !items || !keys) return null
  return (
    <>
      <Title>{title}</Title>
      <div>
        <HeaderRow headers={headers} />
        <ContentRow items={items} keys={keys} customRenderers={customRenderers} />
      </div>
    </>
  )
}

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  padding: 5px 10px 20px;
`

export default ListComponent
