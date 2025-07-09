import Home from '@/features/Home';
import CreateProject from '@/features/projects/pages/CreateProject';
import EditProject from '@/features/projects/pages/EditProject';
import { projectLoader } from '@/features/projects/pages/projectLoader';

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
  },
  {
    path: '/projects/edit/:id',
    element: <EditProject />,
    handle: { center: true },
    loader: projectLoader
  }
];

export const routesWithoutLayout = [];
