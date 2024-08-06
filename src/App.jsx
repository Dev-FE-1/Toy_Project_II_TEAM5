import Layout from '@components/shared/Layout'
import AdminPage from '@pages/admin/admin-page'
import HomePage from '@pages/home/home-page'
import NotFoundPage from '@pages/not-found/not-found-page'
import SalaryManagementPage from '@pages/salary-management/salary-management-page'
import SigninPage from '@pages/signin/signin-page'
import TaskManagementPage from '@pages/task-management/taskManagement-page'
import TestPage from '@pages/test/test-page'
import { useEffect } from 'react'
import useAuthState from '@components/Login/useAuthState'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Loading from '@components/shared/Loading'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, loading } = useAuthState()
  const pageLists = ['/', '/salary', '/task', '/test', '/signin', '*']

  useEffect(() => {
    if (loading) return
    const curPage = pageLists.find((pageList) => pageList === location.pathname)
    //임의로 페이지를 옮겼을 때, user 정보가 없으면 signin/ 있으면 마지막페이지로 이동
    if (!user) {
      navigate('/signin')
    } else {
      if (location.pathname === '/signin' || !curPage) {
        navigate(-1)
      }
    }
  }, [navigate, location.pathname, user, loading])

  if (loading) {
    return <Loading />
  }
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
