import "./contact.scss";
import { Mail, Instagram, LinkedIn, GitHub } from "@material-ui/icons";



export default function Contact() {
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
                <h2>Contact <Mail/></h2>
                    <form>
                        <input type="text" placeholder="Email"/>
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
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
