import CardioDataCard from './CardioDataCard';

function CardioDataList({ registros, onDelete }) {
  if (registros.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhum registro cadastrado ainda.</p>
      </div>
    );
  }

  return (
    <div className="cardio-list">
      <h2>Registros Recentes</h2>
      <div className="cards-container">
        {registros.map((registro) => (
          <CardioDataCard 
            key={registro.id} 
            data={registro} 
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default CardioDataList;