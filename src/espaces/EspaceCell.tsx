import './EspaceCell.css';
import { Habitat } from "../models/space";
import { useNavigate } from 'react-router-dom';

type EspaceCellProps = {
  habitat: Habitat;
};

function EspaceCell({ habitat }: EspaceCellProps) {
  const navigate = useNavigate();
  return (
    <div className="espace-card" onClick={()=>navigate('/espaces/' + habitat._id)}>
      <h2 className="espace-title">{habitat.name}</h2>
      <p className="espace-description">{habitat.description}</p>
      <p className="espace-hours">
        🕒 Open from <strong>{habitat.openingHours / 60}h00</strong> to <strong>{habitat.closingHours / 60}h00</strong>
      </p>
      <p className="espace-types">
        🌿 Types: <span>{habitat.types.join(", ")}</span>
      </p>
    </div>
  );
}

export default EspaceCell;