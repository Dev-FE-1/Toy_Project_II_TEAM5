import Layout from '@components/shared/Layout'
import HomePage from '@pages/home/home-page'
import SalaryManagementPage from '@pages/salary-management/salary-management-page'
import SigninPage from '@pages/signin/signin-page'
import TaskManagementPage from '@pages/task-management/taskManagement-page'
import TestPage from '@pages/test/test-page'
import { Route, Routes } from 'react-router-dom'

function App() {
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
