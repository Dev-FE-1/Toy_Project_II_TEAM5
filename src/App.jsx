import Layout from '@components/shared/Layout'
import AdminPage from '@pages/admin/admin-page'
import HomePage from '@pages/home/home-page'
import NotFoundPage from '@pages/not-found/not-found-page'
import SalaryManagementPage from '@pages/salary-management/salary-management-page'
import SigninPage from '@pages/signin/signin-page'
import TaskManagementPage from '@pages/task-management/taskManagement-page'
import TestPage from '@pages/test/test-page'
import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (!user) {
      navigate('/signin')
    } else if (location.pathname === '/signin') {
      navigate(-1)
    }
  }, [navigate, location])

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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
