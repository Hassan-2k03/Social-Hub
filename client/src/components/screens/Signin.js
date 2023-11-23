import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";


const SignIn = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () => {
        if (!/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#d32f2f red darken-2" })
            return
        }
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#d32f2f red darken-2" })
                }
                else {
                    M.toast({ html: "Signedin successfully", classes: "#00c853 green accent-4" })
                    navigate('/')
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
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #b39ddb deep-purple lighten-3"
                    onClick={() => PostData()}
                >
                    Login
                </button>
                <h5>
                    <Link to="/signin">Account doesn't exists !!!</Link>
                </h5>
            </div>
        </div>
    )
}

export default SignIn