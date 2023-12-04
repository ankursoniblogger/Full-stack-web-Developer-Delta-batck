import "./Prodect.css";
import Price from "./Price";

function Prodect( {title , idx}){
    let oldPrices = ["12,999" , "129" , "999", "450"]
    let newPrices = ["8,999" , "120" , " 799" , "350"];
    let Description = ["800-MI", "wireless", "Smoothness", "Excellent"]
    return(
        <div className="Prodect">
            <p>{title}</p>
            <p>{Description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}
export default Prodect ;