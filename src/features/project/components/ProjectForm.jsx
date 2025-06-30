import FormContent from '@/shared/components/layout/form/FormContent';
import FormActions from '@/shared/components/layout/form/FormActions';
import Input from '@/shared/components/ui/Input';
import InputCurrency from '@/shared/components/ui/InputCurrency';
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
            value={values.name}
            onChange={handleChange}
            placeholder="Insira o nome do projeto"
            required
          />

          <InputCurrency
            label="Orçamento do Projeto"
            name="budget"
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
