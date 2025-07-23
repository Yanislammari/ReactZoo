import { on } from 'node:stream';
import { Animal } from '../models/animal'
import './AnimalCell.css'

type AnimalCellProps = {
  animal : Animal
  onClick: () => void; 
}

function AnimalCell({ animal, onClick }: AnimalCellProps) {
  const bornOnDate = new Date(animal.bornOn);
  const bornOnFormatted = bornOnDate.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div className="animal-cell" onClick={onClick}>
      <div className="animal-info">
        <h3>{animal.name}</h3>
        <p>{animal.description}</p>
      </div>
      <p className="animal-date">Née le : {bornOnFormatted}</p>
    </div>
  );
}


export default AnimalCell;

