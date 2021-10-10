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
            backgroundImage: `url(${mapBackground})`,
            backgroundSize: "cover",
            }}>
            <div className="biggerBoat">
                <div className="container" id="container">
                    <video controls muted><source src={MapPinAppDemo} type="video/mp4"></source></video>
                </div>
                <div className="right">
                    <h2><span ref={textRef}></span></h2>
                </div>
            </div>
        </div>
    )
}
