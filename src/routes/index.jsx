import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import App from '../App';

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        ...routes
      ]
    }
  ]
);
