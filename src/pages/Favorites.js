import Cookies from "js-cookie";
import heart from "../assets/img/heart.svg";


const Favorites = () => {

  Cookies.get("newFavList");
  const parsingFavList = JSON.parse(Cookies.get("newFavList"))
  //console.log(parsingFavList);

  return (
    <div className="container">
    <section className="info-section">
      {parsingFavList.map((character, index) => {
      //const thumbnail = `${character.thumbnail.path}.jpg`;

      return (
        <div key={index}>
         <div className="info-card">
          <h3>{character.name}</h3>
        
           {/*
            className="thumbnail" 
            style={{ height: "200px" }}
            src={thumbnail}
            alt="character-thumbnail"
            <img/>
      */} 
            

            <article> <img src={heart}
              style={{ width: "18px", color: 'red' }}
              alt=""></img> <span style={{fontWeight: 'bold'}}>Favori</span></article>

         </div>
        </div>  
      );
    })}
    </section>
    </div>

  );

};
  
export default Favorites;