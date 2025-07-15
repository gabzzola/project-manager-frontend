import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.dotsContainer}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}

export default Loading;
