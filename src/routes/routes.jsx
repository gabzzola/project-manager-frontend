import { Outlet } from 'react-router-dom';
import Home from '../features/Home';

import { Projects, CreateProject, EditProject } from '../features/projects/pages';
import { loaderAllProjects, loaderProjectById } from '../features/projects/projectLoaders';
import { createProjectAction, updateProjectAction, deleteProjectAction } from '../features/projects/projectActions';

import { CreateCategory } from '../features/categories/pages';
import { createCategoryAction } from '../features/categories/categoryActions';

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
  },
  {
    path: '/categories',
    element: <Outlet />,
    children: [
      {
        path: 'new',
        element: <CreateCategory />,
        action: createCategoryAction,
        handle: { title: 'Criar Categoria', center: true }
      }
    ]
  }
];

export const routesWithoutLayout = [];
