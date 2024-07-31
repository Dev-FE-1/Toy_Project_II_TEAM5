import styled from 'styled-components'
import ListItem from './ListItem'

const Listcontainer = ({
  lists,
  rows,
  createCustomNameCell,
  createCustomPositionCell,
  moreIcon,
  createCustomChecklistCell,
}) => {
  return (
    <>
      <ListRowHeader>
        {rows.map((header) => (
          <ListRowText key={header.key}>
            <ListRowTitleText>{header.header}</ListRowTitleText>
          </ListRowText>
        ))}
      </ListRowHeader>
      <ListRowUl key={lists.id}>
        {lists.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            rows={rows}
            createCustomNameCell={createCustomNameCell}
            createCustomPositionCell={createCustomPositionCell}
            createCustomChecklistCell={createCustomChecklistCell}
            moreIcon={moreIcon}
          />
        ))}
      </ListRowUl>
    </>
  )
}

const ListRowHeader = styled.ul`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  border-bottom: 1px solid #e2e8f0;
`

const ListRowUl = styled.ul`
  display: grid;
`

const ListRowTitleText = styled.span`
  color: #a0aec0;
  font-size: 0.9em;
`

const ListRowText = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  position: relative;
`

export default Listcontainer
