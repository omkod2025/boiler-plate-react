import type { ComponentType } from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from '@/components/Layout/Layout'
import PageLoader from '@/components/PageLoader/PageLoader'
import { routes } from '@/app/routes'

const lazyPage = (load: () => Promise<{ default: ComponentType }>) =>
  async () => ({ Component: (await load()).default })

export const router = createBrowserRouter([
  {
    Component: Layout,
    HydrateFallback: PageLoader,
    children: [
      { index: true, lazy: lazyPage(routes.home.load) },
      { path: routes.about.path, lazy: lazyPage(routes.about.load) },
      {
        path: '*',
        lazy: lazyPage(() => import('@/pages/NotFound/NotFoundPage')),
      },
    ],
  },
])
