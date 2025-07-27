import { NumericFormat } from 'react-number-format';
import styles from './Input.module.css';

function InputCurrency({ label, name, value, onChange, ...rest }) {
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

      <input type="hidden" name={name} value={value || ''} />

      <NumericFormat
        id={name}
        value={value}
        onValueChange={handleValueChange}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        className={styles.input}
        {...rest}
      />
    </div>
  );
}

export default InputCurrency;
