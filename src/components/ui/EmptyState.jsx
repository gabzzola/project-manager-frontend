import { CreateButton } from '@/components/ui/button';
import styles from './EmptyState.module.css';

function EmptyState({ title, message, actionText, actionLink }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>

      {actionText && actionLink && (
        <CreateButton to={actionLink} hasData={false}>
          {actionText}
        </CreateButton>
      )}
    </div>
  );
}

export default EmptyState;