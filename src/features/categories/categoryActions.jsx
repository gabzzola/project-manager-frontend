import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createCategory, updateCategory } from './services/categoryService';

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

export async function updateCategoryAction({ params, request }) {
  const { id } = params;

  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  try {
    await updateCategory(id, values);
    toast.success('Categoria atualizada com sucesso!');
    return redirect(`/categories`);

  } catch (error) {
    toast.error('Erro ao atualizar a categoria!');
    console.error('Erro ao atualizar a categoria', error);
    return error;
  }
}
