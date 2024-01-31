import "./topbar.scss"
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro"><h1 className="logo">Natureogrphy .</h1></a>
            <div className="item" id="item1">
              <MailIcon className="mail" />
              <span>indraudhsarkar001@gmail.com</span>
            </div>
            <div className="item" id="item2">
              <PersonIcon className="person"/>
              <span className="number">+91-7278674911</span>
            </div>
            <div className="item" id="item3">
              <InstagramIcon className="insta"/>
              <a href="https://www.instagram.com/natureogrphy?igsh=MWZhNHJqNmM2cWljMA==">
              <span className="instac">natureogrphy</span>
              </a>
            </div>
        </div>
        <div className="right">
           <div className="lines" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
           </div>
        </div>
      </div>
    </div>
  )
}
