import { useLocation, useParams } from "react-router-dom";
import { Animal } from "../models/animal"
import AnimalCell from "../animaux/AnimalCell";
import { Species } from "../models/species";
import { useEffect, useState } from "react";
import { apiCall } from "../api/apiCall";

type propsSpecies={
  species : Species
}

type propsImages = {
  imagesId : string[]
}

function AnimalDetail(){
  const location = useLocation();
  const { id } = useParams<{ id: string }>();

  const animal = location.state?.animal as Animal | undefined;

  return(
       <div
        style={{
          backgroundImage: "url('/assets/jungle.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: '100vh',  // full viewport height
          width: '100%',    // full width
        }}
      >
      {
        <div
          style={{
            padding: "30px 200px" // 70px top & bottom, 100px left & right
          }}
        >
          <AnimalCell key = {animal?._id} animal={animal!} onClick={()=>{}}/>
          <SpeciesDetail key={animal?.species._id} species={animal?.species!}/>
          {animal && animal.images && animal.images.length > 0 && (
            <ImageCarousel key={animal._id} imagesId={animal.images} />
          )}
        </div>
      }
      </div>
  )
}

export default AnimalDetail;

function SpeciesDetail({species} : propsSpecies){
  return (
    <div className="animal-cell">
      <div className="animal-info">
        <h3>{species.name}</h3>
        <p>{species.description}</p>
      </div>
    </div>
  );
}

function ImageCarousel({ imagesId }: propsImages) {
  const [loading, setLoading] = useState(true);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      try {
        const fetchPromises = imagesId.map(async (imageId) => {
          const res = await apiCall(`asset/${imageId}`, "GET", null);
          if (!res || !res.ok) throw new Error(`Failed to fetch image ${imageId}`);
          const blob = await res.blob();
          return URL.createObjectURL(blob);
        });

        const urls = await Promise.all(fetchPromises);
        setImageUrls(urls);
      } catch (error) {
        console.error("Failed to fetch images:", error);
        setImageUrls([]);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();

    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
      setImageUrls([]);
    };
  }, [imagesId]);

  if (loading) return <p>Loading...</p>;
  if (imagesId.length === 0) return <p>No images found.</p>;

  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "10px",
        padding: "10px",
        whiteSpace: "nowrap",
      }}
    >
      {imageUrls.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`image-${index}`}
          style={{
            height: "100px",
            borderRadius: "8px",
            cursor: "pointer",
            flex: "0 0 auto",
          }}
        />
      ))}
    </div>
  );
}