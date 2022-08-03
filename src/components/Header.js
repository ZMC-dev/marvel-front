import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";


const Header = () => {

  return (
      <header className="App-header">
        <section className='header-menu'>

          <div className='header-menu-left'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <div className='header-menu-right'>
            <input id="search-bar" type="search" placeholder="Spiderman..."></input>
            <article> <Link to="/comics">Comics</Link></article>
            <article> <Link to="/characters">Personnages</Link> </article>
            <article> <Link to="/favorites">Favoris</Link> </article>
          </div>

        </section>   
    </header>
  );
};

export default Header;



