import { lazy } from 'react';
import * as path from "node:path";

const App = lazy(() => import('@/app'));
const CurrentWeatherPage = lazy(() => import('@/pages/current-weather'));
const FiveDayForecastPage = lazy(() => import('@/pages/five-day-forecast'));
const FiveDayForecastDay = lazy(() => import('@/features/get-weather/five-day-forecast/ui/FiveDayForecastDay.jsx'))

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
      },
      {
        path: 'forecast/:q',
        element: <FiveDayForecastPage />,
        children: [
          {
            path: ':day',
            element: <FiveDayForecastDay />
          }

        ]
      },
    ]
  }
]

export default routes;