import { FormLayout, FormHeader } from '@/components/ui/form';
import ProjectForm from '../components/ProjectForm';

function CreateProject() {
  return (
    <FormLayout maxWidth="650px">
      <FormHeader
        title="Criar Projeto"
        subtitle="Crie seu projeto para depois adicionar serviços"
      />

      <ProjectForm initialValues={{ name: '', budget: '' }} />
    </FormLayout>
  );
}

export default CreateProject;
