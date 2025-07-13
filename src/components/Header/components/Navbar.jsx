import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { navLinks } from '../data/navLinks';

import MenuToggle from './MenuToggle';
import NavItem from './NavItem';
import styles from './Navbar.module.css';

function Navbar() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav>
      {isMobile &&
        <MenuToggle onClick={toggleMenu} />
      }

      <ul className={clsx(styles.list, { [styles.open]: menuOpen })}>
        {
          navLinks.map((link) => (
            <NavItem
              key={link.to}
              {...link}
              isMobile={isMobile}
              onLinkClick={toggleMenu}
            />
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;
