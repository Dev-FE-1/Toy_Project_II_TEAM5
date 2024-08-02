import useUser from '@hooks/useUser'
import { Navigate, Outlet } from 'react-router-dom'

function AuthGuard() {
  const { user, loading } = useUser()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/signin" replace />
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default AuthGuard
