import "./main.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cocktails">Cocktails</Link>
        <Link to="/profile">Profile</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
