import { useLoaderData } from 'react-router-dom';

import FormLayout from '@/components/form/FormLayout';
import FormHeader from '@/components/form/FormHeader';
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
