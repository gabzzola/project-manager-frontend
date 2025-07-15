import FormLayout from '@/components/form/FormLayout';
import FormHeader from '@/components/form/FormHeader';
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
