import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const navigation = [
    { to: "/", text: "Home" },
    { to: "/about", text: "Sobre" },
    { to: "/contact", text: "Contato" },
  ];

  return (
    <nav>
      <ul className={styles.list}>
        {
          navigation.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => 
                  isActive ? `${styles.item} ${styles.active}` : styles.item
                }
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
