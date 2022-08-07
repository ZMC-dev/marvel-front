import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import Header from "../components/Header";


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

     <div>
          <Header/>

      <div className="container">  
              
          <section className="character-comics-section">
      
            <div>
            <Link to={`/character/${data._id}`}>
              <button className="btn-to-character-page">{data.name}</button>
              </Link>
             
              <p>{data.description}</p>
            </div>
            
          <div className="character-comics-list" >

            {data.comics.map((comic,index)=>{
              return(
                <div key={index}>
                  <img
                className="thumbnail" 
                style={{ width: "100px" }}
                src={`${comic.thumbnail.path}.jpg`}
                alt="character-thumbnail"
                />
                </div>
              );
            })}

            </div>
      </section>

     </div>

  </div>
             
  
  );
};

export default PageOfComics;