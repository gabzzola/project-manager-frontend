import Home from '@/features/Home';

export const routesWithLayout = [
  {
    path: '/',
    element: <Home />,
    handle: { center: true }
  }
];

export const routesWithoutLayout = [];
