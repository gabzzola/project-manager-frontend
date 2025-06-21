import styles from './FormContainer.module.css';

function FormContainer({ handleSubmit, children }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      {children}
    </form>
  );
}

export default FormContainer;
