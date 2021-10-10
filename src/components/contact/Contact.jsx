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
                    <form target="_blank" action="https://formsubmit.co/6e427625d8fb9b6da024f9a9c689ffd9" nSubmit={handleSubmit} method="POST">
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
                                </div>
                                <div class="col">
                                    <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                        </div>
                            <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
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
