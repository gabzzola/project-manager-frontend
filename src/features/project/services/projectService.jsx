import api from '@/shared/services/api';

export async function createProject(projectData) {
  const response = await api.post('/api/projects', projectData);
  return response.data;
}
