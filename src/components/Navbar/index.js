import "./main.css";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const logout = () => {
    setUser("");
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cocktails">Cocktails</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={() => logout()}>Logout</button>
      </ul>
    </nav>
  );
};

export default Navbar;
