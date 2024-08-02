import Layout from '@components/shared/Layout'
import HomePage from '@pages/home/home-page'
import SalaryManagementPage from '@pages/salary-management/salary-management-page'
import SigninPage from '@pages/signin/signin-page'
import TaskManagementPage from '@pages/task-management/taskManagement-page'
import TestPage from '@pages/test/test-page'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')
    !user && navigate('/signin') //user가 없으면 navigate시 로그인 페이지로 이동시킴
  }, [navigate])

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/salary" element={<SalaryManagementPage />} />
          <Route path="/task" element={<TaskManagementPage />} />
          <Route path="/test" element={<TestPage />} />
        </Route>
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </>
  )
}

export default App
