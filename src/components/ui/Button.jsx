import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.css';

function Button({
  to,
  type = 'button',
  onClick,
  variant = '',
  children
}) {

  const className = clsx(styles.btn, styles[variant]);

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
