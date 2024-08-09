import Layout from '@components/shared/Layout'
import Loading from '@components/shared/Loading'
import useAuthState from '@hooks/useAuthState'
import HomePage from '@pages/home/home-page'
import NotFoundPage from '@pages/not-found/not-found-page'
import SalaryManagementPage from '@pages/salary-management/salary-management-page'
import SigninPage from '@pages/signin/signin-page'
import TaskManagementPage from '@pages/task-management/taskManagement-page'
import { Navigate, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Flex from '@components/shared/Flex'

function App() {
  const { user, loading } = useAuthState()

  if (loading) {
    return (
      <Center>
        <Loading />
      </Center>
    )
  }

  return (
    <>
      <Routes>
        <Route element={user ? <Layout /> : <Navigate to="/signin" />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/salary" element={<SalaryManagementPage />} />
          <Route path="/task" element={<TaskManagementPage />} />
        </Route>
        <Route path="/signin" element={user ? <Navigate to="/" /> : <SigninPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

const Center = styled(Flex)`
  width: 100%;
  height: 100vh;
`

export default App
