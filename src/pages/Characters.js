import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import heart from "../assets/img/heart.svg";
import Cookies from "js-cookie";



const Characters = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const [favorites, setFavorites] = useState(JSON.parse(Cookies.get("newFavList")));

   
    //const [results, setResults] = useState();


  
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const response = await axios.get("http://localhost:4000/characters");
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
        <Header/>
       <div className="container">
        <section className="info-section">
          {data.results.map((character) => {
          const thumbnail = `${character.thumbnail.path}.jpg`;

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
              {/* ajouter aux favs ne marche pas, je réussi à créer un tableau mais j'arrive pas à copier les infos vers la page favoris */}
              <button className="fav-btn" onClick={(()=> {
                const newFavorites = [...favorites];
                newFavorites.push(character);
                setFavorites(newFavorites)
                const stringifyFavList = JSON.stringify(newFavorites)
                
                console.log("Character =>" + character)
                console.log("newFavorites => " + newFavorites);
                console.log("stringifyFavList" + stringifyFavList);

                
                Cookies.set('newFavList', stringifyFavList)
         
                //VOILÀ 
                //setFavorites(JSON.parse(Cookies.get("newFavList")))

              })}> <img src={heart}
              style={{ width: "18px", color: "#fffff" }}
              alt=""></img></button>   

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