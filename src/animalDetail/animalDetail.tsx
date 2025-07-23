import { useLocation, useParams } from "react-router-dom";
import { Animal } from "../models/animal"

type AnimalDetailProps = {
  animal : Animal
}


function AnimalDetail(){
  const location = useLocation();
  const { id } = useParams<{ id: string }>();

  const animal = location.state?.animal as Animal | undefined;

  return(
    <div>{animal?.name}</div>
  )
}


export default AnimalDetail;