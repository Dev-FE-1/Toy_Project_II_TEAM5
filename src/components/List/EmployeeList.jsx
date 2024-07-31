import styled from 'styled-components'
import ListComponent from './ListComponent.jsx'
import { employees } from '../Constant/employees.jsx'
import EmployeeProfile from './CustomRenderers/EmployeeProfile.jsx'
import EmployeePosition from './CustomRenderers/EmployeePosition.jsx'
import EmployeeStatus from './CustomRenderers/EmployeeStatus.jsx'

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

const ListContainer = styled.div`
  width: 60%;
  border-radius: 15px;
  padding: 20px 15px;
  box-shadow: 0 3.5px 5.5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`

export default EmployeeList
