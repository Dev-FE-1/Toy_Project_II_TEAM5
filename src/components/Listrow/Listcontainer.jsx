import styled, { css } from 'styled-components'
import { colors } from '@styles/Colors'

export const Listcontainer = ({ lists, rows, createCustomNameCell, createCustomPositionCell}) => {
  return (
    <ListRowContainer>
      <ListRowTitle>
        {rows.map((row) => (
          <ListRowText key={row.key}>
            <ListRowTitleText>{row.header}</ListRowTitleText>
          </ListRowText>
        ))}
      </ListRowTitle>
      <ul>
        {lists.map((item) => (
          <ListRowContent key={item.id}>
            {rows.map((row) => (
              <ListRowText 
                key={`${row.id}-${row.key}`}
                status={row.key === 'status' ? item[row.key] : null}
              >
                {row.key === 'name' && createCustomNameCell
                  ? createCustomNameCell(item, row)
                  : row.key === 'position1' && createCustomPositionCell
                  ? createCustomPositionCell(item, row)
                  : item[row.key]}
              </ListRowText>
            ))}
          </ListRowContent>
        ))}
      </ul>
    </ListRowContainer>
  )
}

const ListRowContainer = styled.div`
  padding: 10px;
`

const ListRowTitle = styled.ul`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  border-bottom: 1px solid #e2e8f0;
`
const ListRowTitleText = styled.span`
  color: #a0aec0;
`

const ListRowContent = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
`

const ListRowText = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  font-weight: bold;
    ${props => props.status === 'Online' && css `
      width: 80px;
      justify-content: center;
      color: ${colors.white};
      background: #48bb78;
      text-align: center;
      border-radius: 8px;
    `}
    ${props => props.status === 'Offline' && css `
      width: 80px;
      justify-content: center;
      color: ${colors.white};
      background: #cbd5e0;
      text-align: center;
      border-radius: 8px;
    `}
`

export default Listcontainer
