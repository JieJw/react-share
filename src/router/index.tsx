import { useRoutes, RouteObject } from 'react-router-dom'
import LayoutIndex from '@/layout'
import Memo from '@/pages/memo'
import HookExample from '@/pages/hook-example'
import ConCurrent from '@/pages/concurrent'

export const rootRouter: Array<RouteObject> = [
  {
    path: '/',
    element: <LayoutIndex />,
    children: [
      {
        index: true,
        element: <Memo />
      },
      {
        path: 'memo',
        element: <Memo />
      },
      {
        path: 'api',
        element: <HookExample />
      },
      {
        path: 'concurrent',
        element: <ConCurrent />
      }
    ]
  },
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
