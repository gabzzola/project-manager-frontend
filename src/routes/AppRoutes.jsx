import { Routes, Route } from 'react-router-dom';
import { appRoutes } from './routesConfig';

function AppRoutes() {
  return (
    <Routes>
      {
        appRoutes.map(({ path, element }) => (
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
