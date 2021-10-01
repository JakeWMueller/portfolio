import "./contact.scss";
import { Mail, Instagram, LinkedIn, GitHub } from "@material-ui/icons";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="itemContainer">
            <Mail/>
            <span>  jake.william.mueller@gmail.com </span><br/>
            <Instagram />  a href="jakeneedsfriends" <br/>
            <LinkedIn/> a href="linked.com/jake-mueller" <br/>
            <GitHub/> a href="github.com/jake-mueller" <br/>
            <span> Code Wars Logo and link</span><br/>
            <span> Medium Logo and link</span><br/>
            </div>
        </div>
    )
}
