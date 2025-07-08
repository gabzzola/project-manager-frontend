import styles from './FormContent.module.css';

function FormContent({ onSubmit, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContent} autoComplete="off">
      {children}
    </form>
  );
}

export default FormContent;
