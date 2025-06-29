import FormContent from '@/shared/components/layout/form/FormContent';
import FormActions from '@/shared/components/layout/form/FormActions';
import Input from '@/shared/components/ui/Input';
import SubmitButton from '@/shared/components/ui/SubmitButton';

function ProjectForm({ initialValues, onSubmit }) {
  return (
    <FormContent
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, handleChange }) => (
        <>
          <Input
            label="Nome do Projeto"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Insira o nome do projeto"
            required
          />

          <Input
            label="Orçamento do Projeto"
            name="budget"
            type="number"
            step="0.01"
            value={values.budget}
            onChange={handleChange}
            placeholder="Insira o orçamento do projeto"
            required
          />

          <FormActions>
            <SubmitButton text="Criar Projeto" />
          </FormActions>
        </>
      )}
    </FormContent>
  );
}

export default ProjectForm;
