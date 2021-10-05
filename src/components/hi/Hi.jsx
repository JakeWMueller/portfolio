import backgroundVideo from "../../assets/snowy-mountain-peaks-desktop-wallpaperwaifu.com.mp4";
import backgroundPicture from "../../assets/mountainpic.png";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./hi.scss";

export default function Hi() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCurser: true,
            startDelay: 2000,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Musician", "Writer", "Jolly Good Fellow", "Unicyclist", "Dog Whisperer", "Jiujiteiro", "High Elf Wizard", "Enthusiast",]
        })
    })
    return (
        <div className="hi" id="hi">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster={backgroundPicture}
                style={{
                    position: "relative",
                    display: "flex", //
                    width: "100vw",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1
                }}>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
            <div className="container">
                <div className="left">
                    <h2>Hi, I'm Jake | </h2>
                </div>
                <div className="right">
                    <h2><span ref={textRef}></span></h2>
                </div>
            </div>
        </div>
    )
};
