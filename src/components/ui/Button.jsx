import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ type, variant = '', children }) {
  return (
    <button
      type={type}
      className={clsx(styles.btn, styles[variant])}
    >
      {children}
    </button>
  );
}

export default Button;
