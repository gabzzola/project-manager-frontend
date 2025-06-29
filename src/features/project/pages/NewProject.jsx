import { useNavigate } from 'react-router-dom';
import { createProject } from '../services/projectService';

import PageTitle from '@/shared/components/utils/PageTitle';
import FormLayout from '@/shared/components/layout/form/FormLayout';
import FormHeader from '@/shared/components/layout/form/FormHeader';
import ProjectForm from '../components/ProjectForm';

function NewProject() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const project = await createProject(values);
      navigate(`/editproject/${project.id}`);
    } catch (error) {
      console.error('Erro ao criar projeto: ', error);
    }
  };

  return (
    <>
      <PageTitle title="Novo Projeto" />

      <FormLayout maxWidth="550px">
        <FormHeader
          title="Criar Projeto"
          subtitle="Crie seu projeto para depois adicionar serviços"
        />

        <ProjectForm initialValues={{ name: '', budget: '' }} onSubmit={handleSubmit} />        
      </FormLayout>
    </>
  );
}

export default NewProject;
