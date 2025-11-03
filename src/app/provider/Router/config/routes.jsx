import { lazy } from 'react';

const App = lazy(() => import('@/app'));
const CurrentWeatherPage = lazy(() => import('@/pages/current-weather'));
const FiveDayForecastPage = lazy(() => import('@/pages/five-day-forecast'));

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'current',
        element: <CurrentWeatherPage />
      },
      {
        path: 'forecast',
        element: <FiveDayForecastPage />
      },
      {
        path: 'current/:q',
        element: <CurrentWeatherPage />
      }
    ]
  }
]

export default routes;