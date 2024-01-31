import "./menu.scss"
// import {Intro} from "../intro/Intro"
// import {Portfolio} from "../portfolio/Portfolio"
export default function Menu({menuOpen,setMenuOpen}) {
  // const link1 ="#intro"
  // const navigate = <u></u>seNavigate();
  return (
    <div className={"menu " + (menuOpen && "active")} style={{"zIndex":4}}>
        <span className="bar"></span>
        <ul>
            <li onClick={()=>setMenuOpen(false)}><a href="#intro">Intro</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#works">Work</a></li>
            {/* <li onClick={()=>setMenuOpen(false)}><a href="#testimonials">Testimonials</a></li> */}
            <li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>
        </ul>
    </div>
  );
  }