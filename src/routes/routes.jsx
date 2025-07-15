import Home from '../features/Home';

import CreateProject from '../features/projects/pages/CreateProject';
import EditProject from '../features/projects/pages/EditProject';
import { loaderProjectById } from '../features/projects/projectLoaders';
import { createProjectAction, updateProjectAction } from '../features/projects/projectActions';

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
  },
  {
    path: '/projects/edit/:id',
    element: <EditProject />,
    handle: {
      title: 'Editar Projeto',
      center: true
    },
    loader: loaderProjectById,
    action: updateProjectAction
  }
];

export const routesWithoutLayout = [];
