import Hi from "./components/hi/Hi";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Pokedex from "./components/projects/Pokedex";
import MappinApp from "./components/projects/MappinApp";
import Music from "./components/music/Music";
import Writing from "./components/writing/Writing";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
      <Hi/>
      <Skills/>
      <Pokedex/>
      <MappinApp/>
      <Music/>
      <Writing/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
