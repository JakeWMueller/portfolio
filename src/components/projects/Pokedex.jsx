import "./pokedex.scss";
import pokemon from "../../assets/pokemon.png";
// import pokedexBackground from "../../assets/pokedexBackgrond.png";

export default function Pokedex() {
    return (
        <div className="pokedex" id="pokedex" style={{
            display: "flex",
            position: "relative",
            backgroundImage: `url(${pokemon})`,
            objectFit: "cover",
            width: "100vw",
            height: "100%",
            overflow: "auto",
            color: "#FF1F1F"
        }}>
            <div className="container" id="container" style={{
                display: "flex",
                top: "40%",
                left: "50%",
                bottom: "50%",
                position: "absolute",
                width: "40em",
                height: "20em",
                
            }}></div>
            {/* https://generation1pokedex.herokuapp.com/#/ */}
            
        </div>
    )
}
