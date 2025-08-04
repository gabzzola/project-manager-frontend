import { useLoaderData } from 'react-router-dom';
import { FormLayout, FormHeader } from '@/components/ui/form';
import CategoryForm from '../components/CategoryForm';

function EditCategory() {
  const { category } = useLoaderData();

  return (
    <FormLayout maxWidth='650px'>
      <FormHeader title='Editar Categoria' />

      <CategoryForm initialValues={category} />
    </FormLayout>
  );
}

export default EditCategory;
