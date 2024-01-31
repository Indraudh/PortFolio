import "./portfoliolist.scss"

export default function Portfoliolist({ id, title, active, setselected }) {
  return (
     <li className={active? "portfoliolist active" : "portfoliolist"} onClick={()=>setselected(id)}>
          {title} 
     </li>
  )
}
