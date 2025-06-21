import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import styles from './MainLayout.module.css';
import sharedStyles from '../styles/SharedStyles.module.css';

function MainLayout() {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${sharedStyles.container}`}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
