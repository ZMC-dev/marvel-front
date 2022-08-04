import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const PageOfCharacter = () => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharactersId = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/character/${characterId}`);
        console.log("response.data ===> "+ response.data);
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
    <div>

      <h3>Hello</h3>
      <p>{data}</p>
  
      {/* 
      
      
      <section>
        
        {data.results.map((character) => {

        //const thumbnail = `${character.thumbnail.path}.jpg`;

        return (
        <div >
          <h1>Page Of Character</h1>

            {character.comics.map((id, index)=>{
                return (
                  <ul key={index}>
                    <li>{id}</li>
                  </ul>
                )
          })}


          // ==> lien à reproduire
          <Link to={`/comics/${character._id}`}>
            <div>
              <h2>{character.name}</h2>
              <img
                style={{ height: "150px" }}
                src={img}
                alt=""
              />
            </div>
          </Link> //


        </div>
        );
      })}
      </section>
      
    */}

      
    </div>
  );
};

export default PageOfCharacter;