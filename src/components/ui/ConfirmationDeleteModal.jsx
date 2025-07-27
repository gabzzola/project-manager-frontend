import { Form } from 'react-router-dom';
import styles from './ConfirmationDeleteModal.module.css';

function ConfirmationDeleteModal({ isOpen, onClose, itemId, inputName, children }) {
  if (!isOpen) {
    return null;
  }

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div onClick={onClose} className={styles.modalBackdrop}>
      <div onClick={handleContentClick} className={styles.modalContent}>
        <header className={styles.modalHeader}>
          <h2>Confirmar Exclusão</h2>
        </header>

        <main className={styles.modalBody}>
          {children}

          <div className={styles.modalActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancelar
            </button>

            <Form method="delete" onSubmit={onClose}>
              <input type="hidden" name={inputName} value={itemId} />
              <button type="submit" className={styles.deleteButton}>
                Sim
              </button>
            </Form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ConfirmationDeleteModal;
