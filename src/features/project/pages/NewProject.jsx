import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../services/projectService';

import PageTitle from '@/shared/components/utils/PageTitle';
import SubmitButton from '@/shared/components/ui/SubmitButton';

import MainContainer from '../components/MainContainer';
import ProjectForm from '../components/form/FormContainer';
import FormActions from '../components/form/FormActions';
import InputName from '../components/form/input/InputName';
import InputBudget from '../components/form/input/InputBudget';

import styles from './NewProject.module.css';

function NewProject() {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({ name: '', budget: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProjectData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const project = await createProject(projectData);
      const projectId = project.id;

      navigate(`/editproject/${projectId}`);

    } catch (error) {
      console.error('Erro ao criar projeto: ', error);
    }
  };

  return (
    <>
      <PageTitle title="Novo Projeto" />

      <MainContainer>
        <div className={styles.introContainer}>
          <h1>Criar Projeto</h1>
          <p>Crie seu projeto para depois adicionar serviços</p>
        </div>

        <ProjectForm handleSubmit={handleSubmit}>
          <InputName
            value={projectData.name}
            onChange={handleChange}
          />

          <InputBudget
            value={projectData.budget}
            onChange={handleChange}
          />

          <FormActions>
            <SubmitButton text="Criar Projeto" />
          </FormActions>
        </ProjectForm>
      </MainContainer>
    </>
  );
}

export default NewProject;
