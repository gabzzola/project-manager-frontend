import PageTitle from '@/components/utils/PageTitle';
import LinkButton from '@/components/ui/LinkButton';
import logo from './img/home.png';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <PageTitle title="Home" />

      <div className={styles.mainContainer}>
        <div className={styles.introContainer}>
          <h1>
            Bem-vindo ao <span>Gerenciador de Projetos</span>
          </h1>

          <p>Comece a gerenciar seus projetos agora mesmo!</p>

          <LinkButton
            to="/projects/new"
            text="CRIAR NOVO PROJETO"
            variant="pulsing"
          />
        </div>

        <div className={styles.logoContainer}>
          <img src={logo} alt="Gerencie seus projetos!" />
        </div>
      </div>
    </>
  );
}

export default Home;
