import { getAllProjects, getProjectById } from './services/projectService';

export async function loaderAllProjects() {
  const projects = await getAllProjects();

  return { projects: projects || [] };
}

export async function loaderProjectById({ params }) {
  const project = await getProjectById(params.id);

  if (!project) {
    throw new Response('Projeto não encontrado', { status: 404 });
  }

  return { project };
}
