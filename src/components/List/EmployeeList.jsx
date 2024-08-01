import styled from 'styled-components'
import ListComponent from './ListComponent.jsx'
import { employees } from '../Constant/employees.jsx'
import EmployeeProfile from './CustomRenderers/EmployeeProfile.jsx'
import EmployeePosition from './CustomRenderers/EmployeePosition.jsx'
import EmployeeStatus from './CustomRenderers/EmployeeStatus.jsx'
import ShadowyBox from '@components/shared/ShadowyBox.jsx'

function EmployeeList() {
  const headers = ['성명', '직책', '현황', '입사일']
  const keys = ['name', 'position', 'status', 'date']

  const customRenderers = {
    name: EmployeeProfile,
    position: EmployeePosition,
    status: EmployeeStatus,
  }

  return (
    <ListContainer>
      <ListComponent
        title="직원 목록"
        items={employees}
        headers={headers}
        keys={keys}
        customRenderers={customRenderers}
      />
    </ListContainer>
  )
}

const ListContainer = styled(ShadowyBox)`
  width: 60%;
`

export default EmployeeList
