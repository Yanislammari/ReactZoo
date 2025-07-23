import { Animal } from '../models/animal'
import './AnimalCell.css'

type AnimalCellProps = {
  animal : Animal
}

function AnimalCell({ animal }: AnimalCellProps) {
  return (
    <div className="animal-cell">
      <h3>{animal.name}</h3>
      <p>{animal.description}</p>
    </div>
  );
}

export default AnimalCell;

