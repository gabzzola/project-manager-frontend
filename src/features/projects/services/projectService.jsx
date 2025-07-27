import api from '@/services/api';

export async function createProject(project) {
  const response = await api.post('/api/projects', project);
  return response.data;
}

export async function getAllProjects() {
  const response = await api.get('/api/projects');
  return response.data;
}

export async function getProjectById(id) {
  const response = await api.get(`/api/projects/${id}`);
  return response.data;
}

export async function updateProject(id, project) {
  const response = await api.put(`/api/projects/${id}`, project);
  return response.data;
}

export async function deleteProject(id) {
  await api.delete(`/api/projects/${id}`);
}
