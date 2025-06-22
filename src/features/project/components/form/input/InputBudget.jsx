import Input from '@/shared/components/ui/Input';

function InputBudget({ value, onChange }) {
  return (
    <Input 
      label="Orçamento do Projeto"
      name="budget"
      type="number"
      step="0.01"
      value={value}
      onChange={onChange}
      placeholder="Insira o orçamento do projeto"
      required={true}        
    />
  );
}

export default InputBudget;
