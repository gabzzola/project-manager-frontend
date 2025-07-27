import styles from './FormLayout.module.css';

function FormLayout({ maxWidth, children }) {
  return (
    <div className={styles.formLayout} style={{ maxWidth }}>
      {children}
    </div>
  );
}

export default FormLayout;
