import clsx from 'clsx';
import styles from './FormContent.module.css';

function FormContent({ onSubmit, className = '', children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(styles.formContent, styles[className])} autoComplete="off">
      {children}
    </form>
  );
}

export default FormContent;
