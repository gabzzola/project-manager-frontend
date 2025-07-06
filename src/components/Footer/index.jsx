import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <SocialLinks />

      <h4>
        Gerenciador de Projetos
      </h4>
    </footer>
  );
}

export default Footer;
