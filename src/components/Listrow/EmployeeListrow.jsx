import styled from 'styled-components'
import { colors } from '@styles/Colors'
import { employeeLists } from '@components/Constant/employeeLists'
import Listcontainer from './Listcontainer'
import { Fragment } from 'react'

const rows = [
  { key: 'name', header: '성명' },
  { key: 'position1', header: '역할' },
  { key: 'status', header: '현황' },
  { key: 'date', header: '입사일' },
]

const EmployeeListrow = () => {
  const createCustomNameCell = (item, row) => {
    if (row.key === 'name') {
      return (
        <Fragment>
          <EmployeeProfile>
            <EmployeeProfileImg src={item.profile} alt={item.name} />
          </EmployeeProfile>
          <div>
            {item.name}
            <EmployeeEmail>{item.email}</EmployeeEmail>
          </div>
        </Fragment>
      )
    }
    return item[row.key]
  }

  const createCustomPositionCell = (item, row) => {
    if (row.key === 'position1') {
      return (
        <EmployeePosition>
          <span>{item.position1}</span>
          <EmployeePosition2>{item.position2}</EmployeePosition2>
        </EmployeePosition>
      )
    }
    return item[row.key]
  }

  return (
    <EmployeeList>
      <Title>직원 목록</Title>
      <Listcontainer
        lists={employeeLists}
        rows={rows}
        createCustomNameCell={createCustomNameCell}
        createCustomPositionCell={createCustomPositionCell}
      />
    </EmployeeList>
  )
}

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
`

const EmployeeList = styled.div`
  width: 50%;
  border-radius: 15px;
  padding: 20px 15px;
  box-shadow: 0 3.5px 5.5px rgba(0, 0, 0, 0.1);
`

const EmployeeProfile = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 5px;
`

const EmployeeProfileImg = styled.img`
  width: 100%;
`

const EmployeeEmail = styled.span`
  display: block;
  color: ${colors.gray};
  font-size: 12px;
`

const EmployeePosition = styled.div`
  display: flex;
  flex-direction: column;
`
const EmployeePosition2 = styled.span`
  color: ${colors.gray};
  font-size: 12px;
`

export default EmployeeListrow
