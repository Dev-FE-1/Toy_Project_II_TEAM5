import Layout from '@components/shared/Layout'
import AdminPage from '@pages/admin/admin-page'
import HomePage from '@pages/home/home-page'
import SalaryManagementPage from '@pages/salary-management/salary-management-page'
import SigninPage from '@pages/signin/signin-page'
import TaskManagementPage from '@pages/task-management/taskManagement-page'
import TestPage from '@pages/test/test-page'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const user = sessionStorage.getItem('user')

    if (!user) {
      navigate('/signin')
    } else {
      if (location.pathname === '/signin') {
        navigate(-1)
      }
    }
  }, [navigate, location.pathname])

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/salary" element={<SalaryManagementPage />} />
          <Route path="/task" element={<TaskManagementPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </>
  )
}

export default App
