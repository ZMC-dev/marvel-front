import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = ({setSearch}) => {
  const onChange = event => {setSearch(event.target.value)}
  
  return (
      <header className="header">
        <section className="header-left">
          <Link to="/">
            <img src={logo} className="header-logo" alt="logo" />
          </Link>
        </section>   
        <section >
          <div className="header-right">
            <div className="search-bar">
              <input  
              type="text" 
              className="search-bar" 
              placeholder="search.......something"
              onChange={onChange}/>
            </div>
            <button> <Link to="/characters">Personnages</Link> </button>
            <button> <Link to="/comics">Comics</Link></button>
            <button> <Link to="/favorites">Favoris</Link> </button>
          </div>
        </section>  

    </header>
  );
};
export default Header;



