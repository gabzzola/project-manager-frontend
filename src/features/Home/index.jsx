import { CreateButton } from '@/components/ui/button';
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

        <CreateButton to="/projects/new" hasData={false}>
          CRIAR NOVO PROJETO
        </CreateButton>
      </div>

      <div className={styles.logoContainer}>
        <img src={logo} alt="Gerencie seus projetos!" />
      </div>
    </div>
  );
}

export default Home;
