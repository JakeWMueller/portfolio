import backgroundVideo from "../../assets/snowy-mountain-peaks-desktop-wallpaperwaifu.com.mp4";
import "./hi.scss";
import backgroundPicture from "../../assets/mountainpic.png";

export default function Hi() {
    return (
        <div className="hi" id="hi">
            <video playsInline autoPlay loop muted id="winter" poster={backgroundPicture} src={backgroundVideo} type="video/mp4"/>
        </div>
    )
};
