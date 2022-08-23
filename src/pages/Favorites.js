import Cookies from "js-cookie";
import heart from "../assets/img/heart.svg";


const Favorites = () => {

  Cookies.get("newFavList");
  const parsingFavList = JSON.parse(Cookies.get("newFavList"))
  //console.log(parsingFavList);

  return (
    <div className="container">
    <section className="info-section">

      {parsingFavList.map((obj, index) => {
      console.log(obj.picture);
      return (
        <div key={index}>
         <div className="info-card">
          <h3>{obj.name}</h3>
           <img
            className="thumbnail" 
            style={{ height: "200px" }}
            src={obj.picture}
            alt=""
            />

            <button className="fav-btn" onClick={(()=> {

              //RAJOUTER ICI CODE POUR SUPPRIMER ELEMENT DES COOKIES

              })}> <img src={heart}
              style={{ width: "18px", color: "red" }}
              alt=""></img></button>  

         </div>
        </div>  
      );
    })}
    </section>
    </div>

  );

};
  
export default Favorites;