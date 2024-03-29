import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";


const SignUp = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () => {
        if (!/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#d32f2f red darken-2" })
            return
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#d32f2f red darken-2" })
                }
                else {
                    M.toast({ html: data.message, classes: "#00c853 green accent-4" })
                    navigate('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Social Hub</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #b39ddb deep-purple lighten-3"
                    onClick={() => PostData()}
                >
                    SignUp
                </button>
                <h6>
                    <Link to="/signin">Login</Link>
                </h6>
            </div>
        </div>
    )
}

export default SignUp