import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';

function Navbar() {
  const navigation = [
    { to: "/", text: "Home" },
    { to: "/about", text: "Sobre" },
    { to: "/contact", text: "Contato" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        <FaBars size="24px" />
      </button>

      <ul className={`${styles.list} ${menuOpen ? styles.open : ''}`}>
        {
          navigation.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => 
                  isActive ? `${styles.item} ${styles.active}` : styles.item
                }
                onClick={toggleMenu}
              >
                { item.text }
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;
