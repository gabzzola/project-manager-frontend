import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ label, name, ...rest }, ref) {

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>

      <input
        id={name}
        name={name}
        ref={ref}
        className={styles.input}
        {...rest}
      />
    </div>
  );
});

export default Input;
