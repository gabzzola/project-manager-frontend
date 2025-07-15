import { useEffect, useRef } from 'react';
import { Form } from 'react-router-dom';
import clsx from 'clsx';

import { useForm } from '@/hooks/useForm';
import { useNavigationStatus } from '@/hooks/useNavigationStatus';
import Input from '@/components/ui/Input';
import InputCurrency from '@/components/ui/InputCurrency';
import FormActions from '@/components/form/FormActions';
import SubmitButton from '@/components/ui/SubmitButton';
import CancelButton from '@/components/ui/CancelButton';

function ProjectForm({ initialValues, onCancel, className = '', children }) {
  const { values, handleChange } = useForm(initialValues);

  const { isSubmitting, isBusy } = useNavigationStatus();

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Form method="post" className={clsx("form", className)}>
      <Input
        label="Nome do Projeto"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Insira o nome"
        required
        ref={inputRef}
      />
      <InputCurrency
        label="Orçamento do Projeto"
        name="budget"
        value={values.budget}
        onChange={handleChange}
        placeholder="Insira o orçamento"
        required
      />

      {children}

      <FormActions>
        {onCancel && <CancelButton to={onCancel} disabled={isBusy} />}

        <SubmitButton disabled={isSubmitting}>
          {isSubmitting ? "Enviando" : "Salvar"}
        </SubmitButton>
      </FormActions>
    </Form>
  );
}

export default ProjectForm;
