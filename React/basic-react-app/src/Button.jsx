function doSomethings(event){
    console.log("click")
    console.log(event)
}
function click(){
    console.log("click2")
}

export default function Button(){
    return(
        <div>
            <button onClick={doSomethings}>Click me! </button>
            <h1 onClick={click}>I am ankur soni</h1>
        </div>
    )
}