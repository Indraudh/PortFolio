import { SpaRounded } from '@mui/icons-material';
import './contact.scss';
import {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
export default function Contact() {
  const[x, setx]=useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setx(true);
    emailjs.sendForm('service_3dynb1b', 'template_tavqe5r', form.current, '50j3VuQBb5oRsPGAD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
      <img src="assets/contact.png" alt=""  className="c"/>
      </div>
      <div className="right">
      <h2>CONTACT</h2>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder='Name' name="user_name" required/>
          <input type="email" placeholder='Email' name="user_email" required/>
          <textarea placeholder='Message' name="message" required></textarea>
          <input className="end" type='submit' value="Send"/>
          { x  && <span>Thanks,  I'll reply ASAP  :)</span>}
        </form>
      </div>
    </div>
  )
}
