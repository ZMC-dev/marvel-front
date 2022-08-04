import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const response = await axios.get("http://localhost:4000/characters?limit=100");
          //console.log(response.data);
          setData(response.data);
          setIsLoading(false);

        } catch (error) {
          console.log(error.response); 
        }
      };
      fetchCharacters();
    }, []);
  
    return isLoading === true ? (
      <div>En cours de chargement</div>
    ) : (
      <div>
        <section className="info-section">
          {data.results.map((character) => {
            
          const thumbnail = `${character.thumbnail.path}.jpg`;

          return (
            <div key={character._id}>
             <div className="info-card">
              <h3>{character.name}</h3>
              <p>Comic ID : {character._id}</p>


              <Link to={`/character/${character._id}`}>
                <img
                className="thumbnail" 
                style={{ height: "200px" }}
                src={thumbnail}
                alt="character-thumbnail"
                />
              </Link>     

             </div>
            </div>
          );
        })}
        </section>
  
      </div>
    );
  };
  
  
export default Characters;