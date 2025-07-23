import { useState } from 'react'
import './Animaux.css'
import { Animal } from '../models/animal'
import Navbar from '../components/Navbar/Navbar';

function Animaux(){

  const [animaux,setAnimaux] = useState<Animal[]>([])

  return (
    <div style={{ paddingTop: "70px" }}>
      <Navbar />
      {animaux.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">No animal available.</p>
      ) : (
        animaux.map((animal) => (
          <div>{animal.bornOn}</div>
        ))
      )}
    </div>
  );
}

export default Animaux;