import { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:4000/characters");
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);

        } catch (error) {
          console.log(error.response); 
        }
      };
      fetchData();
    }, []);
  
    return isLoading === true ? (
      <div>En cours de chargement</div>
    ) : (
      <div>
        <section className="info-section">
          {data.results.map((character) => {
            
          const thumbnail = `${character.thumbnail.path}.jpg`;

          return (
            <div >
             <div className="info-card">
              <h3>{character.name}</h3>
              <p>Comic ID : {character._id}</p>
  
              <img className="thumbnail" 
              style={{ height: "200px" }}
              src={thumbnail} alt=""></img>     

              {character.comics.map((id, index)=>{
                return (
                  <ul key={index}>
                    <li>{id}</li>
                  </ul>
                )
                
              })}
                


             </div>
            </div>
          );
        })}
        </section>
  
      </div>
    );
  };
  
  
export default Characters;