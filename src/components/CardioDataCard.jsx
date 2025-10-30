function CardioDataCard({ data, onDelete }) {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(data.id);
    }
  };

  return (
    <div className="cardio-card">
      <div className="card-header">
        <h3>{data.nome}</h3>
        <button className="delete-btn" onClick={handleDelete} aria-label="Deletar registro">
          ×
        </button>
      </div>
      <div className="card-content">
        <div className="data-item">
          <span className="data-label">Idade:</span>
          <span className="data-value">{data.idade} anos</span>
        </div>
        <div className="data-item">
          <span className="data-label">Peso:</span>
          <span className="data-value">{data.peso} kg</span>
        </div>
        <div className="data-item">
          <span className="data-label">Pressão Arterial:</span>
          <span className="data-value">{data.pressaoSistolica}/{data.pressaoDiastolica} mmHg</span>
        </div>
        <div className="data-item">
          <span className="data-label">Data/Hora:</span>
          <span className="data-value">{data.dataHora}</span>
        </div>
      </div>
    </div>
  );
}

export default CardioDataCard;