import "./work.scss"
import { useState } from "react"
export default function Work() {
  const [curslider,setCurslider]=useState(0);
  const data=[
    {
      title:"Model Photoshoot",
      paragraph:"Are you ready to step into the spotlight and capture the essence of your unique beauty? Elevate your confidence, embrace your style in a glamorous model photoshoot experience like no other!",
      img:"assets/kk.webp",
      li1: "Professional Photoshoot",
      li2: "Both Outdoor and Indoor",
      li3: "Wardrobe Styling"

    },
    {
      title:"Wedding Photography",
      paragraph:"Say 'I do' to everlasting memories with our expert photography services. Our dedicated team is committed to immortalizing the love and magic of your special day. Trust us to turn your wedding moments into timeless treasures",
      img:"assets/wedding.webp",
      li1: "Pre-Wedding Consultation",
      li2: "Full-Day Coverage",
      li3: "Professional Editing"
    },
    {
      title:"Product Photography",
      paragraph:"Are your products ready for their close-up? Transform your brand and captivate your audience with high-quality, professional product photography that showcases your items in the best light possible.",
      img:"assets/Product.webp",
      li1: "Stunning Visuals",
      li2: "Versatility",
      li3: "Customized Setups"
    }
  ]
  const handleclick=(way)=>{
      way === "left" ? setCurslider(curslider>0 ? curslider-1:2): setCurslider(curslider<(data.length-1) ? curslider+1:0);
  }
  return (
    <div className='works' id="works">
      <div className="slider" style={{transform : `translateX(-${curslider * 100}vw)`}}>
        {data.map((it)=> (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src="assets/cam.webp" alt="" />
                </div>
                <h2>{it.title}</h2>
                <p>{it.paragraph}</p>
                <div>
                <span>What's Included</span>
                <ul>
                  <li>{it.li1}</li>
                  <li>{it.li2}</li>
                  <li>{it.li3}</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="right">
                <img src={it.img} alt="" />
            </div>
          </div>
        </div>))}
      </div>
      <img src="assets/arrow.webp" className="left arrow" alt="" onClick={()=>handleclick("left")}/>
      <img src="assets/arrow.webp" className="right arrow" alt="" onClick={()=>handleclick("right")}/>
    </div>
  )
}
