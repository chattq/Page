import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import Home from './view/home/home'

export default function useRouteElement() {
  const routerElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    }
  ])
  return routerElements
}
