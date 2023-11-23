import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App"

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext)
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/createpost">Create Post</Link> </li>,
                <li>
                    <button className="btn waves-effect waves-light #b39ddb deep-purple lighten-3"
                        onClick={() =>
                            localStorage.clear() & dispatch({ type: "CLEAR" }) & window.location.reload(false)
                            
                        }
                    >
                        Logout
                    </button>
                </li>
            ]
        } else {
            return [
                <li><Link to="/signin">Sign In</Link></li>,
                <li><Link to="/signup">Sign Up</Link></li>
            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to={state ? "/" : "/signin"} className="brand-logo left">Social Hub</Link>
                <ul id="nav-mobile" className="right">
                    {renderList()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;