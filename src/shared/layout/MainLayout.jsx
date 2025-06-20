import { Outlet } from 'react-router-dom';
import sharedStyles from '../styles/SharedStyles.module.css';

function MainLayout() {
  return (
    <main className={sharedStyles.container}>
      <Outlet />
    </main>     
  );
}

export default MainLayout;
