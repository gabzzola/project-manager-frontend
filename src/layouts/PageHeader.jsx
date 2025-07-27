import styles from './PageHeader.module.css';

function PageHeader({ title, children }) {
  return (
    <div className={styles.pageHeader}>
      <h1>{title}</h1>

      {children}
    </div>
  );
}

export default PageHeader;
