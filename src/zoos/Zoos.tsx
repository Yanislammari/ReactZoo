import { useEffect, useState } from 'react';
import './Zoos.css';
import { Zoo } from '../models/zoo';
import { apiCall } from '../api/apiCall';

function Zoos() {
  const [zoos, setZoos] = useState<Zoo[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchZoos = async () => {
      const response = await apiCall('zoo','GET',null)
      const zoosApi = await response?.json()
      if(zoosApi != null){
        const zoosTransform = zoosApi as Zoo[];
        setZoos(zoosTransform)
      }
      setIsLoading(false)
    };

    fetchZoos();
  }, []);

  if (isLoading) {
    return <p>Loading zoos...</p>;
  }

  return (
    <div className="zoos-container">
      {zoos.length === 0 ? (
        <p>No zoos available.</p>
      ) : (
        zoos.map((zoo) => (
          <div key={zoo._id} className="zoo-card">
            {zoo.name}
          </div>
        ))
      )}
    </div>
  );
}

export default Zoos;
