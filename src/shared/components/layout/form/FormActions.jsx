import styles from './FormActions.module.css';

function FormActions({ children }) {
  return (
    <div className={styles.formActions}>
      {children}
    </div>
  );
}

export default FormActions;
