import "./portfolio.scss";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import {useState, useEffect} from "react";
import {eventPortfolio, streetPortfolio, landscapesPortfolio, productPortfolio, wildPortfolio} from "../../data";
export default function Portfolio() {
  const [selected, setselected]=useState("event")
  const [data, setData] = useState([])
  const List = [
     {
      id: "event",
      title: "Event",
     },
     {
      id: "street",
      title: "Street",
     },
     {
      id: "landscapes",
      title: "Landscapes",
     },
     {
      id: "product",
      title: "Product",
     },
     {
      id: "wildlife",
      title: "Wildlife",
     }
  ];
  useEffect(()=>{
    switch(selected){
       case "event": setData(eventPortfolio);break;
       case "street": setData(streetPortfolio);break;
       case "landscapes": setData(landscapesPortfolio);break;
       case "product": setData(productPortfolio);break;
       case "wildlife": setData(wildPortfolio);break;
       default : setData(eventPortfolio);
    }
  },[selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="x">Portfolio</h1>
      <ul>
        {List.map((item)=>(<Portfoliolist title={item.title} active={selected === item.id} setselected={setselected} id={item.id}/>))}
      </ul>
      <div className="container">
        {data.map((d)=>(
        <div className="item">
        <img src={d.img}
         alt="" />
        <h3>{d.title}</h3>
      </div>
        ))}
      </div>
    </div>
  )
}
