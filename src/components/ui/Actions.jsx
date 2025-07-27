import clsx from 'clsx';
import styles from './Actions.module.css';

function Actions({ className, children }) {
  return (
    <div className={clsx(styles.actions, styles[className])}>
      {children}
    </div>
  );
}

export default Actions;
