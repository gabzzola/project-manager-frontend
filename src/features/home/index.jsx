import PageTitle from '@/shared/components/utils/PageTitle';
import LinkButton from '@/shared/components/ui/LinkButton';
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
        </div>

        <LinkButton
          to="/newproject"
          text="CRIAR NOVO PROJETO"
          variant="pulsing"
        />

        <img
          src={logo}
          alt="Gerencie seus projetos!"
        />
      </div>
    </>
  );
}

export default Home;
