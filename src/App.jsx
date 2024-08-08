import Layout from '@components/shared/Layout'
import AdminPage from '@pages/admin/admin-page'
import HomePage from '@pages/home/home-page'
import NotFoundPage from '@pages/not-found/not-found-page'
import SalaryManagementPage from '@pages/salary-management/salary-management-page'
import SigninPage from '@pages/signin/signin-page'
import TaskManagementPage from '@pages/task-management/taskManagement-page'
import TestPage from '@pages/test/test-page'
import useAuthState from '@hooks/useAuthState'
import { Route, Routes, Navigate } from 'react-router-dom'
import Loading from '@components/shared/Loading'

function App() {
  const { user, loading } = useAuthState()

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Routes>
        {user && (
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/salary" element={<SalaryManagementPage />} />
            <Route path="/task" element={<TaskManagementPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        )}
        <Route path="/signin" element={user ? <Navigate to="/" /> : <SigninPage />} />
        <Route path="*" element={user ? <NotFoundPage /> : <Navigate to="/signin" />} />
      </Routes>
    </>
  )
}

export default App
