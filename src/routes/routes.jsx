import Home from '@/features/Home';
import CreateProject from '@/features/projects/pages/CreateProject';

export const routesWithLayout = [
  {
    path: '/',
    element: <Home />,
    handle: { center: true }
  },
  {
    path: '/projects/new',
    element: <CreateProject />,
    handle: { center: true }
  }
];

export const routesWithoutLayout = [];
