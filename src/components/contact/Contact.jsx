import "./contact.scss";
import { Mail, Instagram, LinkedIn, GitHub } from "@material-ui/icons";

import TikTok from "../../assets/TikTok.JPG";


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
            <div className="itemContainer">
            <Mail/>
            <span>  jake.william.mueller@gmail.com </span><br/>
            <Instagram />  a href="jakeneedsfriends" <br/>
            <LinkedIn/> a href="linked.com/jake-mueller" <br/>
            <GitHub/> a href="github.com/jake-mueller" <br/>
            <span> Code Wars Logo and link</span><br/>
            <span> Medium Logo and link</span><br/>
            <div className="TikTokContainer" id="TikTokContainer">
                    <h4>For now, relax with Glacier Charmin and I</h4>
                    <a href="https://vm.tiktok.com/ZMRoxXdWR/" target="_blank" rel="noreferrer"><img src={TikTok} alt="TikTokLink"></img></a>
                </div>
            </div>
        </div>
    )
}
