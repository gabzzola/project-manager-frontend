import { getCategoryById } from './services/categoryService';

export async function loaderCategoryById({ params }) {
  const category = await getCategoryById(params.id);

  if (!category) {
    throw new Response('Categoria não encontrada', { status: 404 });
  }

  return { category };
}
