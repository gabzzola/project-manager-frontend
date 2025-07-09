import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateProject } from '../services/projectsService';

import PageTitle from '@/components/utils/PageTitle';
import FormLayout from '@/components/form/FormLayout';
import FormHeader from '@/components/form/FormHeader';
import ProjectForm from '../components/ProjectForm';

function EditProject() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { project } = useLoaderData();

  const handleSubmit = async (values) => {
    try {
      await updateProject(id, values);
      navigate('/projects');
      toast.success('Projeto atualizado com sucesso!');

    } catch {
      toast.error('Erro ao atualizar projeto');
    }
  };

  return (
    <>
      <PageTitle title={`Editar Projeto: ${project.name}`} />

      <FormLayout maxWidth="800px">
        <FormHeader title="Editar Projeto" />

        <ProjectForm
          initialValues={project}
          onCancel="/projects"
          textSubmit="Salvar"
          onSubmit={handleSubmit}
          className="gridTwoColumns"
        />
      </FormLayout >
    </>
  );
}

export default EditProject;
