import Navbar from '@components/Navbar/Navbar'
import HomePage from '@pages/home/home-page'
import SalaryManagementPage from '@pages/salary-management/salary-management-page'
import SigninPage from '@pages/signin/signin-page'
import TaskManagementPage from '@pages/task-management/taskManagement-page'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/salary" element={<SalaryManagementPage />} />
        <Route path="/task" element={<TaskManagementPage />} />
      </Routes>
    </>
  )
}

export default App
