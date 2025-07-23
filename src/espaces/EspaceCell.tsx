import './EspaceCell.css'
import { Habitat } from "../models/space";

type EspaceCellProps = {
  habitat: Habitat;
};

function EspaceCell(props : EspaceCellProps) {
  return (
    <div>
      <h2>{props.habitat.name}</h2>
      <p>{props.habitat.description}</p>
    </div>
  );
}

export default EspaceCell;