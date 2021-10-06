import "./mappinapp.scss";
import mapBackground from "../../assets/mappinappbackground.png";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import MapPinAppDemo from "../../assets/MapPinAppDemo.mp4";
export default function MappinApp() {
    //initialize ityped when paged is scrolled to
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            startDelay: 200,
            typeSpeed: 50,
            disableBackTyping: true,
            loop:false,
            strings: ["Made with Mongoose, Express, React, Node.js, Axios, MapBox, Material-UI, Heroku and love."]
        })
    })
    return (
        <div className="mappinapp" id="mappinapp" style={{
            display: "flex",
            position: "relative",
            backgroundImage: `url(${mapBackground})`,
            backgroundSize: "cover",
            width: "100vw",
            height: "100%",
            color: "#7775B2",
            justifyContent: "center",
            alignItems: "center"
            }}>
                <h2 style={{
                    position: "absolute",
                    bottom: "20px",
                    zIndex: 3,
                    textShadow: "1px 1px black",
                }}><span ref={textRef}></span></h2>
            <div className="container" id="container" style={{
                backgroundColor: "black",
                width: "80%",
                height: "85%",
                display: "flex",
                position: "absolute",
                padding: "0px",
                border: "2px solid black",
                borderRadius: "15px",
                MozBorderRadius: "15px",
                justifyContent: "center",
            }}><video controls muted><source src={MapPinAppDemo} type="video/mp4"></source></video>
            </div>
        </div>
    )
}
