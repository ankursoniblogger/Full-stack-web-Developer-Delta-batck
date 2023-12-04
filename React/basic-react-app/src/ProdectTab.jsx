import Prodect from "./Prodect";

function ProdectTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };

    return(
        <div style={styles}>
            <Prodect title="Logitech MX player" idx={0}/>
            <Prodect title="airphod" idx={1}/>
           <Prodect title="Apple Pancil (2nd gen)" idx={2}/>
           <Prodect title="Zebronoic Z tranformer" idx={3}/>

        </div>
    )
}

export default ProdectTab;