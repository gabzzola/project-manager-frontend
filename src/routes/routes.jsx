import { Outlet } from 'react-router-dom';
import Home from '../features/Home';
import Projects from '../features/projects/pages/Projects';
import CreateProject from '../features/projects/pages/CreateProject';
import EditProject from '../features/projects/pages/EditProject';
import { loaderAllProjects, loaderProjectById } from '../features/projects/projectLoaders';
import { createProjectAction, updateProjectAction, deleteProjectAction } from '../features/projects/projectActions';

export const routesWithLayout = [
  {
    path: '/',
    element: <Home />,
    handle: { title: 'Página Inicial', center: true }
  },
  {
    path: '/projects',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Projects />,
        loader: loaderAllProjects,
        action: deleteProjectAction,
        handle: { title: 'Meus Projetos', center: false }
      },
      {
        path: 'new',
        element: <CreateProject />,
        action: createProjectAction,
        handle: { title: 'Criar Projeto', center: true }

      },
      {
        path: 'edit/:id',
        element: <EditProject />,
        loader: loaderProjectById,
        action: updateProjectAction,
        handle: { title: 'Editar Projeto', center: true }
      }
    ]
  }
];

export const routesWithoutLayout = [];
