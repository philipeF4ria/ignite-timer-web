import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

function Defaultlayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

export { Defaultlayout }
