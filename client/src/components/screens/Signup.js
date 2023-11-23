import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Social Hub</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button className="btn waves-effect waves-light #b39ddb deep-purple lighten-3">
                    SignUp
                </button>
                <h5>
                    <Link to ="/signin">Account already exists !!!</Link>
                </h5>
            </div>
        </div>
    )
}

export default SignIn