import backgroundVideo from "../../assets/old-house-japan-autumn-leaves-desktop-wallpaperwaifu.com.mp4";
import backgroundPicture from "../../assets/dojo.png";
import "./skills.scss";
import html from "../../assets/devlogos/html.png";
import css from "../../assets/devlogos/css.png";
import js from "../../assets/devlogos/js.png";
import mongo from "../../assets/devlogos/mongodb.png";
import express from "../../assets/devlogos/express.png";
import react from "../../assets/devlogos/react.png";
import node from "../../assets/devlogos/node.png";
import d3 from "../../assets/devlogos/d3.png";
import sass from "../../assets/devlogos/sass.png";
import heroku from "../../assets/devlogos/heroku.png";
import python from "../../assets/devlogos/python.png";
import jupyter from "../../assets/devlogos/jupyter.png";
import flask from "../../assets/devlogos/flask.png";
import linux from "../../assets/devlogos/linux.png";
import git from "../../assets/devlogos/git.png";
import bootstrap from "../../assets/devlogos/bootstrap.png";
import postman from "../../assets/devlogos/postman.png";
import matlab from "../../assets/devlogos/matlab.jpeg";
import gnuoctave from "../../assets/devlogos/gnuoctave.png";
import gimp from "../../assets/devlogos/gimp.png";
import stackoverflow from "../../assets/devlogos/stackoverflow.png";
import ct from "../../assets/ct-logo.png";
import { ArrowBackIosRounded } from "@material-ui/icons";
import { ArrowForwardIosRounded } from "@material-ui/icons";



export default function Skills() {
    return (
        <div className="skills" id="skills">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster={backgroundPicture}
                style={{
                    position: "relative",
                    display: "flex",
                    width: "100vw",
                    height: "calc(100vh - 40px)",
                    objectFit: "cover",
                    zIndex: -1
                }}
                >
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
                <div className="carousel" id="carousel">
                    <div className="container">
                        <div className="item" id="item">
                            <h1>I trained in the
                                <p>Temple</p>
                                <div id="ct"><a href="https://codingtemple.com" target="_blank" rel="noreferrer"><img src={ct} alt="Coding Temple Logo"/></a></div>
                            </h1> 
                        </div>
                        <div className="item2" id="item2">
                            <div className="grid-item"><img src={html} alt="HTML"/></div>
                            <div className="grid-item"><img src={css} alt="CSS"/></div>
                            <div className="grid-item"><img src={js} alt="JavaScript"/></div>
                            <div className="grid-item"><img src={mongo} alt="MongoDB"/></div>
                            <div className="grid-item"><img src={express} alt="Express"/></div>
                            <div className="grid-item"><img src={react} alt="React"/></div>
                            <div className="grid-item"><img src={node} alt="Node.js"/></div>
                            <div className="grid-item"><img src={d3} alt="D3"/></div>
                            <div className="grid-item"><img src={sass} alt="Sass"/></div>
                            <div className="grid-item"><img src={heroku} alt="Heroku"/></div>
                            <div className="grid-item"><img src={python} alt="Python"/></div>
                            <div className="grid-item"><img src={jupyter} alt="Jupyter"/></div>
                            <div className="grid-item"><img src={flask} alt="Flask"/></div>
                            <div className="grid-item"><img src={linux} alt="Linux"/></div>
                            <div className="grid-item"><img src={git} alt="Git"/></div>
                            <div className="grid-item"><img src={bootstrap} alt="Bootstrap"/></div>
                            <div className="grid-item"><img src={postman} alt="Postman"/></div>
                            <div className="grid-item"><img src={matlab} alt="Matlab"/></div>
                            <div className="grid-item"><img src={gnuoctave} alt="GNU Octave"/></div>
                            <div className="grid-item"><img src={gimp} alt="Gimp"/></div>
                            <div className="grid-item"><img src={stackoverflow} alt="Stack Overflow"/></div>
                        </div>
                    </div>
                </div>
                <div className="arrow left" alt="arrow" style={{ cursor: "pointer" }}><ArrowBackIosRounded/></div>
                <div className="arrow right" alt="arrow" style={{ cursor: "pointer" }} ><ArrowForwardIosRounded/></div>
        </div>
    )
}
