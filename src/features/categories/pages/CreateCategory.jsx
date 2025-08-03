import { FormLayout, FormHeader } from '@/components/ui/form';
import CategoryForm from '../components/CategoryForm';

function CreateCategory() {
  return (
    <FormLayout maxWidth='650px'>
      <FormHeader title='Criar Categoria' />

      <CategoryForm
        initialValues={{
          name: '',
          backgroundColor: '#FFFFFF',
          textColor: '#000000'
        }}
      />
    </FormLayout>
  );
}

export default CreateCategory;
