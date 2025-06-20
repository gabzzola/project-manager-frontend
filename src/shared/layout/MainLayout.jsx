import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import sharedStyles from '../styles/SharedStyles.module.css';

function MainLayout() {
  return (
    <>
      <Header />
      <main className={sharedStyles.container}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
