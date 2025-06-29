import { useState } from 'react';
import styles from './FormContent.module.css';

function FormContent({ initialValues, onSubmit, children }) {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContent} autoComplete="off">
      {
        typeof children === 'function'
          ? children({ values, handleChange })
          : children
      }
    </form>
  );
}

export default FormContent;
