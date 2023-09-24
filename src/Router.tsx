import { Route, Routes, useLocation } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Success } from './pages/Success'
import { useEffect } from 'react'

export function Router() {
  const location = useLocation()

  // Update body height when the route changes
  useEffect(() => {
    window.scrollTo(0, 0) // Reset scroll position when navigating
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
