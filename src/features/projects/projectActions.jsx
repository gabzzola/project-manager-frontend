import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createProject, updateProject } from './services/projectService';

export async function createProjectAction({ request }) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const payload = {
    name: values.name,
    budget: Number(values.budget)
  };

  try {
    const project = await createProject(payload);
    toast.success('Projeto criado com sucesso!');
    return redirect(`/projects/edit/${project.id}`);

  } catch (error) {
    toast.error('Erro ao criar projeto!');
    console.error('Erro ao criar projeto', error);
    return error;
  }
}

export async function updateProjectAction({ params, request }) {
  const { id } = params;

  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const payload = {
    name: values.name,
    budget: Number(values.budget)
  };

  try {
    await updateProject(id, payload);
    toast.success('Projeto atualizado com sucesso!');
    return redirect(`/projects`);

  } catch (error) {
    toast.error('Erro ao atualizar projeto!');
    console.error('Erro ao atualizar projeto', error);
    return error;
  }
}
