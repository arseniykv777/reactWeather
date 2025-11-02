import { lazy } from 'react';

const App = lazy(() => import('@/app/App'));

const routes = [
  {
    path: '/',
    element: <App />
  }
]

export default routes;