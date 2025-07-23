import { useState } from "react";
import "./Zoo_explore.css"
import { Habitat } from "../models/space";
import ZooCell from "./ZooCell";
import Navbar from "../components/Navbar/Navbar";

function ZooExplore(){

  const [spaces,setSpaces] = useState<Habitat[]>([])
  return (
    <div style={{ paddingTop: "70px" }}>
      <Navbar />
      {spaces.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">No spaces available.</p>
      ) : (
        spaces.map((habitat) => (
          <ZooCell key={habitat._id} habitat={habitat} />
        ))
      )}
    </div>
  );
}

export default ZooExplore;