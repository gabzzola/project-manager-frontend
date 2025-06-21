import Home from "@/features/home";
import NewProject from '@/features/project/pages/NewProject';

export const routesWithLayout = [
  { path: '/', element: <Home /> },
  { path: '/newproject', element: <NewProject /> }
];

export const routesWithoutLayout = [];
