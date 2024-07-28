import Navbar from '@components/Navbar/Navbar'
import SideNav from '@components/Navbar/SideNav'
import HomePage from '@pages/home/home-page'
import SalaryManagementPage from '@pages/salary-management/salary-management-page'
import SigninPage from '@pages/signin/signin-page'
import TaskManagementPage from '@pages/task-management/taskManagement-page'
import TestPage from '@pages/test/test-page'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <SideNav /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/salary" element={<SalaryManagementPage />} />
        <Route path="/task" element={<TaskManagementPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  )
}

export default App
