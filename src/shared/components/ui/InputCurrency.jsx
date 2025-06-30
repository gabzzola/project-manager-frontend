import { NumericFormat } from 'react-number-format';
import styles from './Input.module.css';

function InputCurrency({ label, name, value, onChange, required, placeholder }) {
  const handleValueChange = (values) => {
    const { floatValue } = values;

    onChange({
      target: {
        name,
        value: floatValue !== undefined ? floatValue : ''
      }
    });
  };

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>

      <NumericFormat
        id={name}
        name={name}
        value={value}
        onValueChange={handleValueChange}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        placeholder={placeholder}
        required={required}
        className={styles.input}
      />
    </div>
  );
}

export default InputCurrency;
