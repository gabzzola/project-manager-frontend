import LinkButton from '../layouts/LinkButton';
import logo from '../assets/images/home.png';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.introContainer}>
        <h1>
          Bem-vindo ao <span>Gerenciador de Projetos</span>
        </h1>

        <p>Comece a gerenciar seus projetos agora mesmo!</p>
      </div>
      
      <LinkButton 
        to="/newproject"
        text="CRIAR NOVO PROJETO"
        className="buttonPulsing"
      />

      <img 
        src={logo} 
        alt="Gerencie seus projetos!" 
      />
    </main>
  );
}

export default Home;
