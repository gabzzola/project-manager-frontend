import api from '@/services/api';

export async function createCategory(category) {
  const response = await api.post('/api/categories', category);
  return response.data;
}
