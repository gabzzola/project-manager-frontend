import { useEffect, useRef } from 'react';
import { useForm } from '@/hooks/useForm';

import FormContent from '@/components/form/FormContent';
import FormActions from '@/components/form/FormActions';
import Input from '@/components/ui/Input';
import InputCurrency from '@/components/ui/InputCurrency';
import CancelButton from '@/components/ui/CancelButton';
import SubmitButton from '@/components/ui/SubmitButton';

function ProjectForm({ initialValues, onCancel, textSubmit, onSubmit, className, children }) {
  const inputRef = useRef(null);
  const { values, handleChange } = useForm(initialValues);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <FormContent onSubmit={handleSubmit} className={className}>
      <Input
        label="Nome do Projeto"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Insira o nome do projeto"
        required
        ref={inputRef}
      />

      <InputCurrency
        label="Orçamento do Projeto"
        name="budget"
        value={values.budget}
        onChange={handleChange}
        placeholder="Insira o orçamento do projeto"
        required
      />

      {children}

      <FormActions>
        {onCancel && <CancelButton to={onCancel} />}        
        <SubmitButton text={textSubmit} />
      </FormActions>
    </FormContent>
  );
}

export default ProjectForm;
