import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useIsMobile } from '@/shared/hooks/useIsMobile';

import { navigationLinks } from '../navigationLinks';
import MenuToggle from './MenuToggle';
import styles from './Navbar.module.css';

function Navbar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen(prev => !prev);
    }
  };

  return (
    <nav>
      <MenuToggle onClick={toggleMenu} />

      <ul className={`${styles.list} ${menuOpen ? styles.open : ''}`}>
        {
          navigationLinks.map(({ to, text }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? `${styles.item} ${styles.active}` : styles.item
                }
              >
                {text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;
