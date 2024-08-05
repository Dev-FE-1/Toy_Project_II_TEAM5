import ShadowyBox from '@components/shared/ShadowyBox.jsx'
import { fetchEmployeeList } from '@reducers/userListSlice.js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import EmployeePosition from './CustomRenderers/EmployeePosition.jsx'
import EmployeeProfile from './CustomRenderers/EmployeeProfile.jsx'
import EmployeeStatus from './CustomRenderers/EmployeeStatus.jsx'
import ListComponent from './ListComponent.jsx'

function EmployeeList() {
  const headers = ['성명', '직책', '현황', '입사일']
  const keys = ['name', 'position', 'status', 'date']
  const dispatch = useDispatch()

  const status = useSelector(({ employeeList }) => employeeList?.status)
  const employeeList = useSelector(({ employeeList }) => employeeList?.data)

  useEffect(() => {
    dispatch(fetchEmployeeList())
  }, [dispatch])

  console.log('status', status)
  console.log('data', employeeList)

  const customRenderers = {
    name: EmployeeProfile,
    position: EmployeePosition,
    status: EmployeeStatus,
  }

  return (
    <ListContainer>
      <ListComponent
        title="직원 목록"
        items={employeeList}
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
