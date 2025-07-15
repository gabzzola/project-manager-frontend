import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ to, type = 'button', variant = '', children, ...rest }) {

  const className = clsx(styles.btn, styles[variant]);

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;
