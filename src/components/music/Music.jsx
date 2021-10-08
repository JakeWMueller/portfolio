import "./music.scss";
import fractalGold from "../../assets/fractalGold.jpg";
// import TikTok from "../../assets/TikTok.JPG";

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
                {/* <div className="TikTokContainer" id="TikTokContainer">
                    <a href="https://vm.tiktok.com/ZMRoxXdWR/" target="_blank" rel="noreferrer"><img src={TikTok} alt="TikTokLink"></img></a>
                </div> */}
            </div>
        </div>
        
    )
}


