import "./contact.scss";
import { Mail, Instagram, LinkedIn, GitHub } from "@material-ui/icons";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="itemContainer">
            <Mail/>
            <span> jake.william.mueller@gmail.com </span>
            <Instagram />a href="jakeneedsfriends"
            <LinkedIn/>
            <GitHub/>
            <span>Coding Temple Logo somewhere</span>
            <span>Code Wars Logo and link</span>
            <span>Medium Logo and link</span>
            </div>
        </div>
    )
}
