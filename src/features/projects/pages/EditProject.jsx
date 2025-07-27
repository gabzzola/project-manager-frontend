import { useLoaderData } from 'react-router-dom';
import { FormLayout, FormHeader } from '@/components/ui/form';
import ProjectForm from '../components/ProjectForm';

function EditProject() {
  const { project } = useLoaderData();

  return (
    <FormLayout maxWidth="800px">
      <FormHeader title="Editar Projeto" />

      <ProjectForm
        initialValues={project}
        onCancel="/projects"
        className="gridTwoColumns"
      />
    </FormLayout >
  );
}

export default EditProject;
