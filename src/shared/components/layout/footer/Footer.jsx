import { socialLinks } from './socialLinks';
import styles from './Footer.module.css';
import socialStyles from './socialLinks.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {
          socialLinks.map(({ icon, style, href }) => (
            <li key={href} className={socialStyles[style]}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            </li>
          ))
        }
      </ul>

      <h4 className={styles.title}>
        Gerenciador de Projetos
      </h4>
    </footer>
  );
}

export default Footer;
