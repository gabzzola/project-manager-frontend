import Input from '@/shared/components/ui/Input';

function InputName({ value, onChange }) {
  return (
    <Input 
      label="Nome do Projeto"
      name="name"
      type="text"
      value={value}        
      onChange={onChange}        
      placeholder="Insira o nome do projeto"
      required={true}        
    />
  );
}

export default InputName;
