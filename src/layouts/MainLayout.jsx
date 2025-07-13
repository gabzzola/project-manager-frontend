import { Outlet, useMatches } from 'react-router-dom';
import clsx from 'clsx';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './MainLayout.module.css';

function MainLayout() {
  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  const shouldCenter = lastMatch.handle?.center === true;

  const mainLayout = clsx(
    'container',
    styles.main,
    { [styles.centered]: shouldCenter });

  return (
    <>
      <Header />
      <main className={mainLayout}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
