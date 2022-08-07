import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import SearchBar from "./SearchBar";

const Header = ({searchResult, newResults}) => {
  return (
      <header className="header">
        <section className="header-left">
          <Link to="/">
            <img src={logo} className="header-logo" alt="logo" />
          </Link>
        </section>   
        <section className="header-right">
          <div>
            <SearchBar searchResult={searchResult} />
            <p>{newResults}</p>
          </div>
          
        </section>  

    </header>
  );
};
export default Header;



