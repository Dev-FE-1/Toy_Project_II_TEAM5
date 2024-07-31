import styled from 'styled-components'

function HeaderRow({ headers }) {
  return (
    <GridContainer $count={headers.length}>
      {headers.map((header, index) => (
        <GridHeader key={index}>{header}</GridHeader>
      ))}
    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `2fr repeat(${props.$count - 1}, 1fr)`};
  gap: 10px;
  border-bottom: 1px solid #e2e8f0;
`

const GridHeader = styled.div`
  color: #a0aec0;
  font-size: 0.9em;
  font-weight: 700;
  padding: 10px;
`

export default HeaderRow
