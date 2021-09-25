// import "./skills.scss";
import backgroundVideo from "../../assets/old-house-japan-autumn-leaves-desktop-wallpaperwaifu.com.mp4";

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <video autoPlay loop muted id="winter">
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
        </div>
    )
}
