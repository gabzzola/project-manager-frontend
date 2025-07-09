import { getProjectById } from '../services/projectsService';

export async function projectLoader({ params }) {
  const project = await getProjectById(params.id);

  if (!project) {
    throw new Response('Projeto não encontrado', { status: 404 });
  }

  return { project };
}
