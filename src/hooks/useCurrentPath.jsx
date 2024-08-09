import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function useCurrentPath() {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  return currentPath
}

export default useCurrentPath
