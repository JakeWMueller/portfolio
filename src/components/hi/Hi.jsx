import backgroundVideo from "../../assets/snowy-mountain-peaks-desktop-wallpaperwaifu.com.mp4";
import "./hi.scss";

export default function Hi() {
    return (
        <div className="hi" id="hi">
            <video autoPlay loop muted id="winter">
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
        </div>
    )
};
