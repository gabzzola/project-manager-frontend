import { useState } from 'react';
import { formatCurrencyBRL } from '@/utils/formatters';
import { EditButton, DeleteButton } from '@/components/ui/button';
import CardActions from '@/components/ui/Actions';
import ConfirmationDeleteModal from '@/components/ui/ConfirmationDeleteModal';
import styles from './ProjectCard.module.css';

function ProjectCard({ id, name, budget }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <li className={styles.projectCard}>
        <h2>{name}</h2>
        <p>Orçamento: {formatCurrencyBRL(budget)}</p>

        <CardActions className="cardActions">
          <EditButton to={`/projects/edit/${id}`} />

          <DeleteButton onClick={() => setIsModalOpen(true)} />
        </CardActions>
      </li>

      <ConfirmationDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemId={id}
        inputName="projectId"
      >
        <p>Tem certeza que deseja excluir o projeto "{name}"?</p>
      </ConfirmationDeleteModal>
    </>
  );
}

export default ProjectCard;
