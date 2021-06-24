import "./main.css";
import { Link } from "react-router-dom";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Navbar = ({ user, setUser }) => {
  const logout = () => {
    setUser("");
  };

  return (
    <div className='nav-container'>
    <div className='home-header'>
      <h1>Cocktail Club</h1>
    </div>
    <nav>
      <ul className="nav-links">
        <Link to="/home">
          <HomeIcon />
          Home
        </Link>
        <Link to="/about">
          <InfoIcon />
          About
        </Link>
        <Link to="/cocktails">
          <LocalBarIcon />
          Search
        </Link>
        <Link className="fav-container" to="/favourites">
          <PersonIcon />
          Favourites
        </Link>
        <button className="exit-button" onClick={() => logout()}>
          <ExitToAppIcon />
        </button>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
