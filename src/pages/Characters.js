import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Characters = ({search, setSearch, skip, setSkip}) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const limit = 36;
    
    //const [favorites, setFavorites] = useState(JSON.parse(Cookies.get("newFavList")));



    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/characters?name=${search}&skip=${skip}&limit=${limit}`);
          //console.log(response.data);

          console.log(search);
          setData(response.data);
          setIsLoading(false);

        } catch (error) {
          console.log(error.response); 
        }
      };
      fetchCharacters();
    }, [search, setSearch, skip, setSkip]);

    return isLoading === true ? (
      <div>En cours de chargement</div>
    ) : (
      <div>
        
        <Header setSearch={setSearch}/>
      
       <div className="container">
        <section className="info-section">
          {data.results.map((character) => {

          const thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`

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
                const newObjCharacter = {name: character.name, picture: thumbnail}
                
                console.log(newObjCharacter);
                newFavorites.push(newObjCharacter);

                setFavorites(newFavorites)
                const stringifyFavList = JSON.stringify(newFavorites)
  
                console.log(stringifyFavList);

                //le nom du cookie est 'newFavList'
                Cookies.set('newFavList', stringifyFavList)
              
              })}>

              <FontAwesomeIcon icon="heart" />
    
              </button>   
        
             </div>
            </div>  
          );
        })}
        </section>
        </div>
        {/* bouttons pagination*/}
            <div className="skip-btn">
                <button
                onClick={(()=>{
                  setSkip(skip - 36)
                })}
                disabled={skip < 36 ? true : false}
                > Page Précedente 
                <FontAwesomeIcon icon="backward" />
                </button>

                <button 
                  onClick={(()=>{
                  setSkip(skip + 36)
                })}
               > 
                <FontAwesomeIcon icon="forward" />
                 Page Suivante
                 </button>
          </div>
      </div>
    );

  };
  
  
export default Characters;