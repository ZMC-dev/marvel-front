import Cookies from "js-cookie";
import heart from "../assets/img/heart.svg";


const Favorites = ({setFavorites}) => {

  Cookies.get("newFavList");
  const parsingFavList = JSON.parse(Cookies.get("newFavList"))
  //console.log(parsingFavList);

  return (
    <div className="container">
    <section className="info-section">

      {parsingFavList.map((obj, index) => {
      return (
        <div key={index}>
         <div className="info-card">
          <h3>{obj.name}</h3>
           <img
            className="thumbnail" 
            style={{ height: "200px" }}
            src={`${obj.picture}.jpg`}
            alt=""
            />
            <button className="fav-btn" onClick={(()=> {

              parsingFavList.splice(index);
              setFavorites(parsingFavList);
              Cookies.set('newFavList', parsingFavList)


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