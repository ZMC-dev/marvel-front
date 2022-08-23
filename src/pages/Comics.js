import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import heart from "../assets/img/heart.svg";
import Cookies from "js-cookie";


const Comics = ({search, setSearch}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/comics?title=${search}`);
       //console.log(response.data);
        setData(response.data);
        setIsLoading(false);

      } catch (error) {
        console.log(error.response); 
      }
    };
    fetchComics();
  }, [search, setSearch]);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <Header setSearch={setSearch}/>
      
      <div className="container">
      <section className="info-section">
        {data.results.map((comic, index) => {

        const thumbnail = `${comic.thumbnail.path}.jpg`;

        return (
           <div key={index} className="info-card">
            <h3>{comic.title}</h3>

              <div className="info-card-comic-desc">

                <img className="thumbnail" 
                style={{ height: "200px" }}
                src={thumbnail} alt=""></img>
      
                <p className="info-description-text">{comic.description}</p>

              </div>
            
              <br/>

              <button className="fav-btn" onClick={(()=> {
                const newFavorites = [...favorites];
                newFavorites.push(comic);
                setFavorites(newFavorites)
                console.log(newFavorites);
                Cookies.set('newFavList', newFavorites)

              })}> <img src={heart}
              style={{ width: "18px", color: "#fffff" }}
              alt=""></img></button>   
           </div>
        );
      })}
      </section>

      </div>
    </div>
  );
};

export default Comics;