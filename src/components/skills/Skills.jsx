import "./skills.scss";
import backgroundVideo from "../../assets/old-house-japan-autumn-leaves-desktop-wallpaperwaifu.com.mp4";
import backgroundPicture from "../../assets/dojo.png";

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <video playsInline autoPlay loop muted className="dojoVideo" id="dojoVideo" poster={backgroundPicture} src={backgroundVideo} type="video/mp4/"/>
        </div>
    )
}
