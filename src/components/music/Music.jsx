import "./music.scss";
import fractalGold from "../../assets/fractalGold.jpg";

export default function Music() {
    return (
        <div className="music" id="music" style={{
            display: "flex",
            position: "relative",
            backgroundImage: `url(${fractalGold})`,
            backgroundSize: "cover",
            width: "100vw",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
            }}>
            <div className="header" id="header">
                <h1>Coming Soon</h1>
            </div>
        </div>
        
    )
}
