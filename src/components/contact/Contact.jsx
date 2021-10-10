import "./contact.scss";
import { Mail, Instagram, LinkedIn, GitHub } from "@material-ui/icons";
import { useState } from "react";

export default function Contact() {

    const [ message, setMessage ] = useState(false);

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact" style={{
            display: "flex",
            position: "relative",
            backgroundColor: "black",
            backgroundSize: "cover",
            width: "100vw",
            height: "100%",
        }}>
            <div className="container">
                <h2>Contact <Mail style={{ padding: "5px"}}/></h2>
                    <form target="_blank" action="https://formsubmit.co/6e427625d8fb9b6da024f9a9c689ffd9" onSubmit={handleSubmit} method="POST">
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
                                </div>
                                <div className="col">
                                    <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                        </div>
                            <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
                            {message && <span>Great! I'll get back to you</span>}
                    </form>
                    <div className="bottom">
                    <a href="https://www.linkedin.com/in/jake-mueller" target="_blank" rel="noreferrer"><LinkedIn/></a>
                    <a href="https://www.github.com/JakeWMueller" target="_blank" rel="noreferrer"><GitHub/></a>
                    <a href="https://www.instagram.com/jakeneedsfriends/" target="_blank" rel="noreferrer"><Instagram/></a>
                </div>
            </div>
        </div>
        
    )
}
