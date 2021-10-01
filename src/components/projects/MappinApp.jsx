import "./mappinapp.scss";
import mapBackground from "../../assets/mappinappbackground.png";

export default function MappinApp() {
    return (
        <div className="mappinapp" id="mappinapp" style={{
            display: "flex",
            position: "relative",
            backgroundImage: `url(${mapBackground})`,
            backgroundSize: "cover",
            width: "100vw",
            height: "100%",
            color: "black"
        }}>
            Anyone There
        </div>
    )
}
