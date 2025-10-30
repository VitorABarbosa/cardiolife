import { useState, useEffect } from 'react';

function CardioDataForm({ onDataAdded }) {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    peso: '',
    pressaoSistolica: '',
    pressaoDiastolica: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new record with timestamp
    const novoRegistro = {
      ...formData,
      id: Date.now(),
      dataHora: new Date().toLocaleString('pt-BR')
    };
    
    // Get existing data from LocalStorage
    const registrosExistentes = JSON.parse(localStorage.getItem('cardioData') || '[]');
    
    // Add new record
    const registrosAtualizados = [...registrosExistentes, novoRegistro];
    
    // Save to LocalStorage
    localStorage.setItem('cardioData', JSON.stringify(registrosAtualizados));
    
    // Call callback if provided
    if (onDataAdded) {
      onDataAdded(registrosAtualizados);
    }
    
    // Reset form
    setFormData({
      nome: '',
      idade: '',
      peso: '',
      pressaoSistolica: '',
      pressaoDiastolica: ''
    });
  };

  return (
    <div className="cardio-form-container">
      <h2>Cadastro de Dados Cardiológicos</h2>
      <form onSubmit={handleSubmit} className="cardio-form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={handleInputChange}
            min="1"
            max="150"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            name="peso"
            value={formData.peso}
            onChange={handleInputChange}
            min="1"
            step="0.1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pressaoSistolica">Pressão Sistólica (mmHg):</label>
          <input
            type="number"
            id="pressaoSistolica"
            name="pressaoSistolica"
            value={formData.pressaoSistolica}
            onChange={handleInputChange}
            min="60"
            max="250"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pressaoDiastolica">Pressão Diastólica (mmHg):</label>
          <input
            type="number"
            id="pressaoDiastolica"
            name="pressaoDiastolica"
            value={formData.pressaoDiastolica}
            onChange={handleInputChange}
            min="40"
            max="150"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Cadastrar Dados
        </button>
      </form>
    </div>
  );
}

export default CardioDataForm;