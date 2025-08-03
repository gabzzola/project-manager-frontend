import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createCategory } from './services/categoryService';

export async function createCategoryAction({ request }) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  try {
    await createCategory(values);
    toast.success('Categoria criada com sucesso!');
    return redirect('/categories');

  } catch (error) {
    toast.error('Erro ao criar a categoria!');
    console.log('Erro ao criar a categoria', error);
    return error;
  }
}
