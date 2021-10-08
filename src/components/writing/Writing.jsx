import "./writing.scss";
import mediumGif from "../../assets/medium.gif";

export default function Writing() {
    return (
        <div className="writing" id="writing" style={{
            display: "flex",
            position: "relative",
            backgroundColor: "white",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
        }}>
            <div className="medium" id="medium">
                <a href="https://medium.com/@jake.william.mueller" target="_blank" rel="noreferrer"><img src={mediumGif} alt="mediumGif"></img></a>
            </div>
        </div>
    )
}
