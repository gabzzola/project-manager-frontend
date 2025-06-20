import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { navigationItems } from '../const/navigation';
import MenuToggle from './MenuToggle';
import styles from './Navbar.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav>
      <MenuToggle onClick={toggleMenu} />

      <ul className={`${styles.list} ${menuOpen ? styles.open : ''}`}>
        {
          navigationItems.map(({ to, text}) => (
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
