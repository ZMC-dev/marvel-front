import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Characters = ({search, setSearch}) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    
    //const [favorites, setFavorites] = useState(JSON.parse(Cookies.get("newFavList")));

    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/characters?name=${search}`);
          //console.log(response.data);
          setData(response.data);
          setIsLoading(false);

        } catch (error) {
          console.log(error.response); 
        }
      };
      fetchCharacters();
    }, [search, setSearch]);

    return isLoading === true ? (
      <div>En cours de chargement</div>
    ) : (
      <div>
        
        <Header setSearch={setSearch}/>
      
       <div className="container">
        <section className="info-section">
          {data.results.map((character) => {

          const thumbnail = `${character.thumbnail.path}.jpg`

          return (
            <div key={character._id}>
             <div className="info-card">
              <h3>{character.name}</h3>
            

              <Link to={`/comics/${character._id}`}>
                <img
                className="thumbnail" 
                style={{ height: "200px" }}
                src={thumbnail}
                alt="character-thumbnail"
                />
              </Link>  

              <br/>
              <button className="fav-btn" onClick={(()=>  {

                const newFavorites = [...favorites];
                // objet infos character pour ne pas push tout le character
                const newObjCharacter = {name: character.name, picture: thumbnail}
                
                console.log(newObjCharacter);
                newFavorites.push(newObjCharacter);

                setFavorites(newFavorites)
                const stringifyFavList = JSON.stringify(newFavorites)
  
                console.log(stringifyFavList);
                
                //le nom du cookie est 'newFavList'
                Cookies.set('newFavList', stringifyFavList)
              

              })}>

              <FontAwesomeIcon className="iconHeart" icon="heart" />
    
              </button>   
        
             </div>
            </div>  
          );
        })}
        </section>
        </div>
      </div>
    );

  };
  
  
export default Characters;