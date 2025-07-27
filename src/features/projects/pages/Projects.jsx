import { useLoaderData } from 'react-router-dom';
import { CreateButton } from '@/components/ui/button';
import PageLayout from '@/layouts/PageLayout';
import PageHeader from '@/layouts/PageHeader';
import ProjectCard from '../components/ProjectCard';
import EmptyState from '@/components/ui/EmptyState';
import styles from './Projects.module.css';

function Projects() {
  const { projects } = useLoaderData();
  const hasProjects = projects.length > 0;

  return (
    <PageLayout>
      <PageHeader title="Projetos">
        {hasProjects && (
          <CreateButton to="/projects/new" hasData={hasProjects}>
            Criar Projeto
          </CreateButton>
        )}
      </PageHeader>

      {!hasProjects && (
        <EmptyState
          title="Nenhum projeto por aqui"
          message="Parece que você ainda não tem projetos. Que tal criar o seu primeiro agora?"
          actionText="CRIAR PROJETO"
          actionLink="/projects/new"
        />
      )}

      {hasProjects && (
        <ul className={styles.list}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </ul>
      )}
    </PageLayout>
  );
}

export default Projects;
