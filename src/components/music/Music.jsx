import "./music.scss";

export default function Music() {
    return (
        <div className="music" id="music" style={{
            display: "flex",
            position: "relative",
            backgroundSize: "cover",
            width: "100vw",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
            }}>
            <iframe id="koji" src="https://withkoji.com/@justjake/" title="koji" width="100%" height="100%"></iframe>
        </div>
    )
}


