import ShadowyBox from '@components/shared/ShadowyBox.jsx'
import { fetchEmployeeList } from '@reducers/userListSlice.js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import EmployeePosition from './CustomRenderers/EmployeePosition.jsx'
import EmployeeProfile from './CustomRenderers/EmployeeProfile.jsx'
import EmployeeStatus from './CustomRenderers/EmployeeStatus.jsx'
import ListComponent from './ListComponent.jsx'
import Loading from '@components/shared/Loading'
import Flex from '@components/shared/Flex.jsx'
import { useState } from 'react'
import { EMPLOYEE_KEYS } from '@constants/Keys.js'

const customRenderers = {
  name: EmployeeProfile,
  position: EmployeePosition,
  status: EmployeeStatus,
}

function EmployeeList() {
  const [loading, setLoading] = useState(true)
  const headers = ['성명', '직책', '현황', '입사일']
  const dispatch = useDispatch()

  const employeeList = useSelector(({ employeeList }) => employeeList?.data)

  useEffect(() => {
    dispatch(fetchEmployeeList())
  }, [dispatch])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        await dispatch(fetchEmployeeList())
      } catch (error) {
        console.error('Failed to fetch employee list:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [dispatch])

  if (loading) {
    return (
      <Center>
        <Loading />
      </Center>
    )
  }

  return (
    <ListContainer>
      <ListComponent
        title="직원 목록"
        items={employeeList}
        headers={headers}
        keys={EMPLOYEE_KEYS}
        customRenderers={customRenderers}
      />
    </ListContainer>
  )
}

const Center = styled(Flex)`
  width: 60%;
`

const ListContainer = styled(ShadowyBox)`
  width: 60%;
`

export default EmployeeList
