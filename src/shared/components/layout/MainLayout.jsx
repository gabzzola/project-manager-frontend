import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import styles from './MainLayout.module.css';
import sharedStyles from '@/shared/styles/SharedStyles.module.css';

function MainLayout() {
  return (
    <>        
      <Header />

      <main className={`${styles.main} ${sharedStyles.container}`}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
