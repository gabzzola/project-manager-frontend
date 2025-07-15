import api from '@/services/api';

export async function createProject(project) {
  const response = await api.post('/api/projects', project);
  return response.data;
}
