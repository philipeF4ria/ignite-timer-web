import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

function Defaultlayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export { Defaultlayout }
