import { FaBars } from 'react-icons/fa';
import styles from './MenuToggle.module.css';

function MenuToggle({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.menuToggle}>
      <FaBars size="2.4rem" />
    </button>
  );
}

export default MenuToggle;
