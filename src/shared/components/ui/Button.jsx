import styles from './Button.module.css';

function Button({ type, onClick, variant, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
