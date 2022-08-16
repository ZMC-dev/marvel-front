import { Link} from "react-router-dom";
import logo from "../assets/img/logo.png";
import hero from "../assets/img/hero.jpg";

//import Cookies from "js-cookie";

const Home = () => {




  return (
    <div className="container-home">
      <section className='menu-home'>
            <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            </Link>

            <img src={hero} className="App-hero" alt=""></img>
            
            <div className="menu-btn">
            <article> <Link to="/characters">Personnages</Link> </article>
            <article> <Link to="/comics">Comics</Link></article>
            <article> <Link to="/favorites">Favoris</Link> </article>
          </div>
        </section> 
    </div>
  );
};

export default Home;
