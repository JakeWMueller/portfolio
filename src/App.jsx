import Hi from "./components/hi/Hi";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Pokedex from "./components/projects/Pokedex";
import MappinApp from "./components/projects/MappinApp";
import Netflix from "./components/projects/Netflix";
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
      <About/>
      <Skills/>
      <Pokedex/>
      <MappinApp/>
      <Netflix/>
      <Music/>
      <Writing/>
      <Contact/>
      </div>

     {/* top section. no navbar yet. 
     Profile Pic. <img src={profilepic} className="App-logo" alt="logo"/> Hi, I'm Jake. Software Developer. etc

     Intro section. Navbar begins here
     Box Box Box Box 
     four columns, one row. covering the whole screen 
     Programmer box - a link to skills section. Should scroll there.


     Technical skills Page
     box box box with logos of all technologies I know. Maybe titles with them. Fully covers page. Bottom has a sentence that says projects down arrow.

     Projects.
     Pokedex Page. Has link from projects in navbar
     is in a rounded box in the middle that links to the heroku app. Background is pikachu.

     Netflix Page.
      Red background, in the middle a rounded box with a screenshot of the netflix app that links to heroku or wherever it ends up hosted.
     Under construction for now. For now just have the screenshot.

     Mappin App page. Run locally and record a video. Upload video to be the box in the middle.
     Background is an old map style from mapbox like is shown in the app.

     Music
     Dedicated Music Site under construction. For now, enjoy some smooth tunes with glacier and I 
     three boxes across with tiktoks loaded in. 

     Writing
     White background. Imagining some fine black lines. In the middle my medium account. A short memorable blurb to go on the site.

     Contact page
     Follow along to lamadev.
     links to everything links are href target_blank to open in a new tab. keep users on the site */}
  
    </div>
  );
}

export default App;
