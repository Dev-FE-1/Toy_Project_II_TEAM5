import { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { colors } from '@styles/Colors'
import CreateProgressbar from '@components/Progressbar/Progressbar'

const Listcontainer = ({ lists, rows, createCustomNameCell, createCustomPositionCell, moreIcon }) => {
  return (
    <Fragment>
      <ListRowTitle>
        {rows.map((row) => (
          <ListRowText key={row.key}>
            <ListRowTitleText>{row.header}</ListRowTitleText>
          </ListRowText>
        ))}
      </ListRowTitle>
      <ListRowUl key={lists.id}>
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
                  : row.key === 'completion'
                  ? <CreateProgressbar completion={item[row.key]} />
                  : row.key === 'more'
                  ? <a href="/tasks"><img src={moreIcon} alt="More" className="more" /></a>
                  : item[row.key]}
              </ListRowText>
            ))}
          </ListRowContent>
        ))}
      </ListRowUl>
    </Fragment>
  )
}

const ListRowTitle = styled.ul`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  border-bottom: 1px solid #e2e8f0;
`

const ListRowUl = styled.ul`
  display: grid;
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
  padding: 10px 15px;
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
