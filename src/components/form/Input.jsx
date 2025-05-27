import styles from './Input.module.css';

function Input({ text, name, type, value, onChange, placeholder, required, step }) {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        { text }:
      </label>
      
      <input 
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        required={required}
        step={step}                  
      />
    </>
  );
}

export default Input;
