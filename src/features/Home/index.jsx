import Button from '@/components/ui/Button';
import logo from './img/home.png';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.introContainer}>
        <h1>
          Bem-vindo ao <span>Gerenciador de Projetos</span>
        </h1>

        <p>Comece a gerenciar seus projetos agora mesmo!</p>

        <Button to="/projects/new" variant="pulsing">
          CRIAR NOVO PROJETO
        </Button>
      </div>

      <div className={styles.logoContainer}>
        <img src={logo} alt="Gerencie seus projetos!" />
      </div>
    </div>
  );
}

export default Home;
