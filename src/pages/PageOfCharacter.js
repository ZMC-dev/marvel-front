import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";



const PageOfCharacter = () => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchCharactersId = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/character/${characterId}`);
        console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCharactersId();
  }, [characterId]);
  

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (

        <section className="character-section">

    <img 
    style={{ height: "300px" }}
    src={`${data.thumbnail.path}.jpg`}
    alt="img-character-page">
    </img>

    <div className="info-right-section">
    <h1>{data.name}</h1>
    <p>{data.description}</p>
    <h2>Comics où apparait ce personnage</h2>

    {data.comics.map((id,index)=>{
          return (
          <div key={index}>
              <p> {id} </p>
          </div>  
          );        
        })}
    
    </div>
  </section>
  
  );
};

export default PageOfCharacter;