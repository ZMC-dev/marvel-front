import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const PageOfComics = () => {
  const { characterId } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchCharactersByComic = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/comics/${characterId}`);
        setData(response.data);
        setIsLoading(false);
      
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCharactersByComic();
  }, [characterId]);
  
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
        <section className="character-section">
          <div>
            <h2>hello</h2>
            <p>{data.name}</p>
            <p>{data.description}</p>

            {data.comics.map((comic,index)=>{
              return(
                <div key={index}>
                  <img
                className="thumbnail" 
                style={{ height: "200px" }}
                src={`${comic.thumbnail.path}.jpg`}
                alt="character-thumbnail"
                />
                </div>
                
              );
            })}

            </div>
      </section>
  
  );
};

export default PageOfComics;