import React from "react";
import "../Counter.css"
import {Link} from "react-router-dom";

function Header(){
 return(
    <div className="main-header">
        <ul className="main-header">
            <Link to="/" className="link">
             <li>Home</li>
            </Link>
            <Link to="/counter" className="link">
             <li >Counter</li>
            </Link>
            <Link to="/about" className="link">
             <li>About</li>
            </Link>
        </ul>

    </div>
 )
}
export default Header;