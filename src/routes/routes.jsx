import Home from '../features/Home';

import CreateProject from '../features/projects/pages/CreateProject';
import { createProjectAction } from '../features/projects/projectActions';

export const routesWithLayout = [
  {
    path: '/',
    element: <Home />,
    handle: {
      title: 'Página Inicial',
      center: true
    }
  },
  {
    path: '/projects/new',
    element: <CreateProject />,
    handle: {
      title: 'Criar Projeto',
      center: true
    },
    action: createProjectAction
  }
];

export const routesWithoutLayout = [];
