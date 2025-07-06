import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './LinkButton.module.css';

function LinkButton({ to, text, variant = '' }) {
  return (
    <Link
      to={to}
      className={clsx(styles.btn, styles[variant])}
    >
      {text}
    </Link>
  );
}

export default LinkButton;
