import { Link } from "react-router-dom";
import "./Navbar.css";
import Guppy from "./images/fish.svg";

const guppyNavbar = () => {
    return (
        <nav className="guppyNav">
            <div className="logo">
                <Link to="/"><img className="guppyLogo" src={Guppy} alt="Guppy"></img></Link>
            </div>
            <div className="navList">
                <ul className="navbarItems">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>            
        </nav>
    )
}
export default guppyNavbar;