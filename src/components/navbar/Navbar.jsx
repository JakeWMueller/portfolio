import "./navbar.scss";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#hi" className="logo">Jake |</a>
                    <a href="#skills" className="navlink">Skills</a>
                    <a href="#pokedex" className="navlink">Projects</a>
                    <a href="#music" className="navlink">Music</a>
                    <a href="#writing" className="navlink">Writing</a>
                    <a href="#contact" className="navlink">Contact</a>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    );
}
