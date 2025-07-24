import './EspaceCell.css';
import { Habitat } from "../models/space";

type EspaceCellProps = {
  habitat: Habitat;
};

function EspaceCell({ habitat }: EspaceCellProps) {
  return (
    <div className="espace-card">
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