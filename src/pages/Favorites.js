import Cookies from "js-cookie";


const Favorites = () => {

  Cookies.get('newFavList');
  const parseFavList = JSON.parse('newFavList');
  console.log(parseFavList);

  return (
  <section>
  
    <div>
      <h1>Favoris</h1>
    </div>
  
  </section> );
  
  }
  
  export default Favorites;