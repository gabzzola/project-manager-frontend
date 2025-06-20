import styles from '../styles/SharedStyles.module.css';

function MainLayout({ children }) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
}

export default MainLayout;
