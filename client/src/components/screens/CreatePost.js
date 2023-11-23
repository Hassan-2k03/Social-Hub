import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

const CreatePost = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")

    const postDetails = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Social_hub")
        data.append("cloud_name", "socialhub")
        fetch("https://api.cloudinary.com/v1_1/socialhub/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })
        fetch("/createpost", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                body,
                pic: url
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#d32f2f red darken-2" })
                }
                else {
                    M.toast({ html: "Created post successfully", classes: "#00c853 green accent-4" })
                    navigate('/')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="card input-filled"
            style={{
                margin: "30px auto",
                maxWidth: "500px",
                padding: "20px",
                textAlign: "center"
            }}>
            <input type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            <input type="text"
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)} />
            <div className="file-field input-field">
                <div className="btn #b39ddb deep-purple lighten-3 ">
                    <span>Upload Image</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #b39ddb deep-purple lighten-3"
                onClick={() => postDetails()}
            >
                Create Post
            </button>
        </div>
    );
}

export default CreatePost