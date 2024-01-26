// let input = document.querySelector("input")
// input.addEventListener("keypress" , function(event){
//     console.log(event.key);
//     console.log("key pressed");
// })

// assignment question

// let body = document.querySelector("body");
// let btn = document.createElement("button");
// btn.innerText = "Click me";
// body.appendChild(btn);

// btn.addEventListener("click" , function (){
//     console.log("btn clicked");
//     this.style.backgroundColor = "green";
// });


// question 1 

// btn.addEventListener("keypress" , function(){
//     console.log("mouse was click");
// })


// question 3 
let input = document.querySelector("input");

input.addEventListener("input" , function(){
    let h2 = document.querySelector("h2")
    h2.innerHTML = input.value;
    console.log(input.value);
    console.dir(input)
})