import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createProject } from '../services/projectsService';

import PageTitle from '@/components/utils/PageTitle';
import FormLayout from '@/components/form/FormLayout';
import FormHeader from '@/components/form/FormHeader';
import ProjectForm from '../components/ProjectForm';

function CreateProject() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const project = await createProject(values);
      navigate(`/projects/edit/${project.id}`);
      toast.success('Projeto criado com sucesso!');

    } catch {
      toast.error('Erro ao criar projeto!');
    }
  };

  return (
    <>
      <PageTitle title="Criar Projeto" />

      <FormLayout maxWidth="550px">
        <FormHeader
          title="Criar Projeto"
          subtitle="Crie seu projeto para depois adicionar serviços"
        />

        <ProjectForm
          initialValues={{ name: '', budget: '' }}
          textSubmit="Criar Projeto"
          onSubmit={handleSubmit}
        />
      </FormLayout>
    </>
  );
}

export default CreateProject;
