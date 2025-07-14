import Home from '../features/Home';

export const routesWithLayout = [
  {
    path: '/',
    element: <Home />,
    handle: {
      title: 'Página Inicial',
      center: true
    }
  }
];

export const routesWithoutLayout = [];
