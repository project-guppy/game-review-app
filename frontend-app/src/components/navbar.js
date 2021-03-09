import {Link} from "react-router-dom";
import "./navbar.css";
import Guppy from "./images/fish.svg";

const guppyNavbar = () => {
    return(
        <nav className="guppyNav">
            <div className="guppyIcon">
                <img className="guppyLogo" src={Guppy} alt="Guppy"></img>
            </div>

            <div className="navbarList">
                <ul className="navbarItems">
                    <li>About</li>
                    <li><Link to = "/login">Log In</Link></li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </nav>
    )
}
export default guppyNavbar;