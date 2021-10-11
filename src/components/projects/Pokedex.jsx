import "./pokedex.scss";
import pokemon from "../../assets/pokemon.png";
import pokeballgif from "../../assets/pokeballshaking.gif";

export default function Pokedex() {
    return (
        <div className="pokedex" id="pokedex" style={{
            display: "flex",
            position: "relative",
            backgroundImage: `url(${pokemon})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            color: "#FF1F1F"
        }}>
            <div className="pokeball" id="pokeball">
                <a href="https://generation1pokedex.herokuapp.com/#/" target="_blank" rel="noreferrer"><img src={pokeballgif} alt="pokeball shaking"></img></a>
            </div> 
        </div>
    )
}
