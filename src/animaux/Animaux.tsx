import { useEffect, useState } from 'react'
import './Animaux.css'
import { Animal } from '../models/animal'
import Navbar from '../components/Navbar/Navbar';
import { apiCall } from '../api/apiCall';
import storeZooId from '../api/storeZooId';
import AnimalCell from './AnimalCell';

function Animaux(){

  const [animaux,setAnimaux] = useState<Animal[]>([])
  const [isLoading,setIsLoading] = useState<boolean>(true)

  useEffect(() => {
        const fetchAnimals = async () => {
          const response = await apiCall(`zoo/${storeZooId.getZooId()}/animal`,'GET',null)
          const animalsApi = await response?.json()
          if(animalsApi != null){
            const animalsTransform = animalsApi as Animal[];
            setAnimaux(animalsTransform)
          }
          setIsLoading(false)
        };
    
        fetchAnimals();
      }, []);


  if (isLoading) {
    return <p>Loading zoos...</p>;
  }

  return (
    <div style={{ paddingTop: "70px" }}>
      <Navbar />
      {animaux.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">No animal available.</p>
      ) : (
        animaux.map((animal) => (
          <AnimalCell key={animal._id} animal={animal} />
        ))
      )}
    </div>
  );
}

export default Animaux;