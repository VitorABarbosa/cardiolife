import { useState, useEffect } from 'react';
import CardioDataForm from './components/CardioDataForm';
import CardioDataList from './components/CardioDataList';
import './App.css';

export default function App() {
  const [registros, setRegistros] = useState([]);

  // Load data from LocalStorage on component mount
  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem('cardioData') || '[]');
    setRegistros(dadosSalvos);
  }, []);

  // Handle new data added
  const handleDataAdded = (novosRegistros) => {
    setRegistros(novosRegistros);
  };

  // Handle record deletion
  const handleDelete = (id) => {
    const registrosFiltrados = registros.filter(registro => registro.id !== id);
    setRegistros(registrosFiltrados);
    localStorage.setItem('cardioData', JSON.stringify(registrosFiltrados));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>CardioLife</h1>
        <p>Sistema de Registro de Dados Cardiológicos</p>
      </header>
      
      <main className="app-main">
        <div className="container">
          <CardioDataForm onDataAdded={handleDataAdded} />
          <CardioDataList registros={registros} onDelete={handleDelete} />
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 CardioLife - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}