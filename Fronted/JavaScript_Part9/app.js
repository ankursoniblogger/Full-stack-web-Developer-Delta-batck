// // let links = document.querySelectorAll(".box  a");
// let body = document.querySelector('body');


// body.createElement('p');

// body.appendChild('p')


// // for(let i=0; i<links.length; i++){
// //     links[i].style.color = "red";
// // }

// // for(link of links){
// //     link.style.color = 'yellow'
// // }


// let body = document.querySelector('body');
// let para1 = document.createElement('p');
// para1.innerText = "Hye I am red! ";
// body.appendChild(para1);
// para1.classList.add('red');

// let h3 = document.createElement('h3');
// h3.innerText = 'Hye I am H3';
// body.appendChild(h3);
// h3.style.color = 'green';
/*
let body = document.querySelector('body');
let box = document.createElement('div');
body.append(box);
let h1 = document.createElement('h1');
h1.innerText = "I am a div";
box.append(h1);
let p = document.createElement('p');
p.innerText = "ME TOO";
box.appendChild(p);

box.style.backgroundColor = "pink";
box.style.border = " 2px solid black";
console.dir(h1.nextElementSibling); */

let body  = document.querySelector('body');
let div = document.createElement('div');
body.appendChild(div);
let input = document.createElement('input');
div.append(input);

let button = document.createElement('button');
button.innerText = "Click Me! " ;
div.append(button);
div.style.border = " 1px solid red";
input.setAttribute("placeholder" , "username");
button.setAttribute("id" , "btn");

let btnid = document.querySelector("#btn");
btnid.classList.add("btnstyle")


let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.style.textDecoration = " wavy underline"
body.append(h1);

let p = document.createElement('p')
p.innerHTML = "ApnaCollege <b>Delta</b>  Practice"
body.append(p)