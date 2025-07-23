import './ZooCell.css'
import { Habitat } from "../models/space";

type ZooCellProps = {
  habitat: Habitat;
};

function ZooCell(props : ZooCellProps) {
  return (
    <div>
      <h2>{props.habitat.name}</h2>
      <p>{props.habitat.description}</p>
    </div>
  );
}

export default ZooCell;