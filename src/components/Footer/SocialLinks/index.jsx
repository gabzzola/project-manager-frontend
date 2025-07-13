import { socialLinks } from './data/socialLinks';
import styles from './socialLinks.module.css';

function SocialLinks() {
  return (
    <ul className={styles.list}>
      {
        socialLinks.map(({ icon, style, href }) => (
          <li key={href} className={styles[style]}>
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
  );
}

export default SocialLinks;
