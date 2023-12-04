export default function Price( {oldPrice , newPrice}){
let oldStyle = {
    textDecorationLine: "line-through"
}
let newStyle = {
    fontWeight: "bold"
}
let styles = {
    backgroundColor: "#dfe366",
    width: "100%",
    height: "30px",
    textAligns: "center"
}
    return(
        <div style={styles}>
           <span style={oldStyle}>{oldPrice}</span> &nbsp; &nbsp; <span style={newStyle}>{newPrice}</span>
        </div>
    )
}