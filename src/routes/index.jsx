import { createBrowserRouter } from 'react-router-dom';
import { routesWithLayout, routesWithoutLayout } from './routes';
import App from '../App';
import MainLayout from '../layouts/MainLayout';

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          element: <MainLayout />,
          children: routesWithLayout
        },
        ...routesWithoutLayout
      ]
    }
  ]
);
