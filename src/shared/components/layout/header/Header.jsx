import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

import logo from '/favicon.ico';
import styles from './Header.module.css';
import sharedStyles from '@/shared/styles/SharedStyles.module.css';

function Header() {
  return (
    <header className={`${styles.header} ${sharedStyles.container}`}>
      <div className={styles.logoContainer}>
        <Link to="/" >
          <img src={logo} alt="Logo do Gerenciador de Projetos" />
        </Link>

        <h1>Gerenciador de Projetos</h1>
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
