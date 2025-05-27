import { useState } from 'react';
import api from '../../services/api';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import './ProjectForm.module.css';

function ProjectForm() {

  const [formData, setFormData] = useState({
    name: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/projects", formData);
      console.log('Sucesso ao criar o projeto: ', response.data);

      setFormData({ name: '', budget: '' });

    } catch (error) {
      console.error('Erro ao criar projeto: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Input 
        text="Nome do Projeto"
        name="name"
        type="text"
        value={formData.name}        
        onChange={handleChange}        
        placeholder="Insira o nome do projeto"
        required={true}        
      />

      <Input 
        text="Orçamento do Projeto"
        name="budget"
        type="number"
        step="0.01"
        value={formData.budget}
        onChange={handleChange}
        placeholder="Insira o orçamento para o projeto"
        required={true}        
      />

      <SubmitButton text="Criar Projeto" />
    </form>
  );
}

export default ProjectForm;
