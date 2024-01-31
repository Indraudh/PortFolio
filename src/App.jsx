import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/works/Work";
import "./app.scss"
import Menu from "./components/menu/Menu";
import {useState} from "react";
function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Work/>
      {/* <Testimonials/> */}
      <Contact/>
    </div>
    </div>
  );
}

export default App;
