import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ label, name, type = 'text', value, onChange, placeholder, required }, ref) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}        
        required={required}
        ref={ref}
        className={styles.input}
      />
    </div>
  );
});

export default Input;
