import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ projectData, setProjectData, textSubmit, handleSubmit }) {

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <Input 
        text="Nome do Projeto"
        name="name"
        type="text"
        value={projectData.name}        
        onChange={handleChange}        
        placeholder="Insira o nome do projeto"
        required={true}        
      />

      <Input 
        text="Orçamento do Projeto"
        name="budget"
        type="number"
        step="0.01"
        value={projectData.budget}
        onChange={handleChange}
        placeholder="Insira o orçamento para o projeto"
        required={true}        
      />

      <SubmitButton text={textSubmit} />
    </form>
  );
}

export default ProjectForm;
