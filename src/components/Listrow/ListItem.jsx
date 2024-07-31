import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { colors } from '@styles/Colors'
import CreateProgressbar from '@components/Progressbar/Progressbar'

const ListItem = ({
  item,
  rows,
  createCustomNameCell,
  createCustomPositionCell,
  createCustomChecklistCell,
  moreIcon,
}) => {
  return (
    <ListRowContent key={item.id}>
      {rows.map((row) => (
        <ListRowText
          key={`${row.id}-${row.key}`}
          $status={row.key === 'status' ? item[row.key] : null}
        >
          {row.key === 'name' && createCustomNameCell ? (
            createCustomNameCell(item, row)
          ) : row.key === 'position1' && createCustomPositionCell ? (
            createCustomPositionCell(item, row)
          ) : row.key === 'completion' ? (
            <CreateProgressbar completion={item[row.key]} />
          ) : row.key === 'more' ? (
            <Link to="/tasks">
              <img src={moreIcon} alt="More" className="more" />
            </Link>
          ) : row.key === 'checklist' ? (
            createCustomChecklistCell(item, row)
          ) : (
            item[row.key]
          )}
        </ListRowText>
      ))}
    </ListRowContent>
  )
}

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
  padding: 10px;
  font-weight: bold;
  position: relative;
  ${(props) =>
    props.status === 'Online' &&
    css`
      width: 80px;
      justify-content: center;
      color: ${colors.white};
      background: #48bb78;
      text-align: center;
      border-radius: 8px;
    `}
  ${(props) =>
    props.$status === 'Offline' &&
    css`
      width: 80px;
      justify-content: center;
      color: ${colors.white};
      background: #cbd5e0;
      text-align: center;
      border-radius: 8px;
    `}
  ${(props) =>
    (props.$status === '진행중' || props.$status === '취소됨' || props.$status === '완료됨') &&
    css`
      font-size: 15px;
    `}
  a {
    position: absolute;
    left: 50%;
  }
`

export default ListItem
