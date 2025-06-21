import styles from './Input.module.css';

function Input({ label, name, type, value, onChange, placeholder, required, step }) {
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
        step={step}
        className={styles.input}
      />
    </div>
  );
}

export default Input;
