import "./intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
export default function Intro() {
  const textref=useRef();
  useEffect(() => {
    init(textref.current, { 
      showCursor: false, 
      backDelay:1500,
      backSpeed:60,
      strings: ["Photographer", "Editor", "Videographer", "Content Creator" ], 
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/self.webp" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Indraudh Sarkar</h1>
          <h3>Freelance <span ref={textref}></span></h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="da"/>
        </a>
      </div>
    </div>
  )
}
