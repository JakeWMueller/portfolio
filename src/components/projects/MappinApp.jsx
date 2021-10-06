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
            color: "black",
            justifyContent: "center",
            alignItems: "center"
            }}>
            <div className="container" id="container" style={{
                width: "90%",
                height: "80%",
                display: "flex",
                position: "absolute",
                padding: "10px",
                border: "2px solid black",
                borderRadius: "15px",
                MozBorderRadius: "15px",
            }}>
            </div>
        </div>
    )
}
