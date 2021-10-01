import backgroundVideo from "../../assets/old-house-japan-autumn-leaves-desktop-wallpaperwaifu.com.mp4";
import backgroundPicture from "../../assets/dojo.png";
import "./skills.scss";

export default function Skills() {
    return (
       <div className="skills" id="skills">
            <div><video 
                autoPlay 
                loop 
                muted 
                poster={backgroundPicture}
                style={{
                    position: "relative",
                    display: "flex",
                    width: "100vw",
                    height: "100%",
                    objectFit: "fill",
                    zIndex: -1
                }}>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
            </div>
            
        </div>
    )
}
