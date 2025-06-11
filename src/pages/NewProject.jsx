import { useState } from 'react';
import { createProject } from '../services/projectService';

import ProjectForm from '../components/project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {

  const [formData, setFormData] = useState({
    name: '',
    budget: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const project = await createProject(formData);
      console.log('Sucesso ao criar o projeto: ', project);

      setFormData({ name: '', budget: '' });

    } catch (error) {
      console.error('Erro ao criar projeto: ', error);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.introContainer}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar serviços</p>
      </div>

      <ProjectForm 
        projectData={formData}
        setProjectData={setFormData}
        textSubmit="Criar Projeto"
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default NewProject;
