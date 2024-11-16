import { createBrowserRouter, Outlet } from 'react-router-dom'
import { ROUTER_ENDPOINT } from './endpoint'
import { lazy, Suspense } from 'react'
import { MainLayout } from '~/components/layouts'

const HomePage = lazy(() => import('~/pages/Home'))
const NotFound = lazy(() => import('~/pages/NotFound'))

export const router = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        path: ROUTER_ENDPOINT.HOME,
        element: <HomePage />
      }
    ]
  },

  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    )
  }
])
