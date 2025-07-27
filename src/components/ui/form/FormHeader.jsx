import styles from './FormHeader.module.css';

function FormHeader({ title, subtitle }) {
  return (
    <div className={styles.formHeader}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default FormHeader;
