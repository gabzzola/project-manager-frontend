import { useEffect, useRef } from 'react';
import { Form } from 'react-router-dom';

import { useForm } from '@/hooks/useForm';
import { useNavigationStatus } from '@/hooks/useNavigationStatus';
import { Input, ColorPicker } from '@/components/ui/form';
import { CancelButton, SubmitButton } from '@/components/ui/button';
import { getContrastingTextColor } from '@/utils/colorUtils';
import FormActions from '@/components/ui/Actions';

function CategoryForm({ initialValues }) {
  const { values, handleChange } = useForm(initialValues);

  const { isSubmitting, isBusy } = useNavigationStatus();

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const newTextColor = getContrastingTextColor(values.backgroundColor);

    if (values.textColor !== newTextColor) {
      handleChange({
        target: { name: 'textColor', value: newTextColor },
      });
    }
  }, [values.backgroundColor, values.textColor, handleChange]);

  return (
    <Form method='post' className='form'>
      <Input
        label='Nome da Categoria'
        name='name'
        value={values.name}
        onChange={handleChange}
        placeholder='Insira o nome'
        required
        ref={inputRef}
      />

      <ColorPicker
        label='Cor de Fundo'
        name='backgroundColor'
        value={values.backgroundColor}
        onChange={handleChange}
      />

      <input type="hidden" name="textColor" value={values.textColor || ''} />

      <FormActions>
        <CancelButton to='/categories' disabled={isBusy} />

        <SubmitButton disabled={isSubmitting}>
          {isSubmitting ? 'Enviando' : 'Salvar'}
        </SubmitButton>
      </FormActions>
    </Form>
  );
}

export default CategoryForm;
