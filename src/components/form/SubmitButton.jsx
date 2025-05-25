import styles from './SubmitButton.module.css';

function SubmitButton({ text }) {
  return (
    <>
      <button className={styles.button}>
        { text }
      </button>
    </>
  );
}

export default SubmitButton;
