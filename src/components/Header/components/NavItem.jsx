import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './NavItem.module.css';

function NavItem({ to, end, text, isMobile, onLinkClick }) {
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        onClick={isMobile ? onLinkClick : undefined}
        className={({ isActive }) =>
          clsx(styles.item, { [styles.active]: isActive })
        }
      >
        {text}
      </NavLink>
    </li>
  );
}

export default NavItem;
