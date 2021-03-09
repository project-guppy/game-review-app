import { Link } from "react-router-dom";
import "./navbar.css";
import Guppy from "./images/fish.svg";

const guppyNavbar = () => {
    return (
        <nav className="guppyNav">
            <img className="guppyLogo" src={Guppy} alt="Guppy"></img>
            <ul className="navbarItems">
                <li>About</li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    )
}
export default guppyNavbar;