import { Routes, Route } from 'react-router-dom';
import { routesWithLayout, routesWithoutLayout } from './routes';
import MainLayout from '../shared/components/layout/MainLayout';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {
          routesWithLayout.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))
        }
      </Route>

      {
        routesWithoutLayout.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))
      }
    </Routes>
  );
}

export default AppRoutes;
