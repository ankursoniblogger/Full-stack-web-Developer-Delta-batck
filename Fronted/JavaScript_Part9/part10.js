// let btns = document.querySelectorAll('button');

// for(btn of btns){
// //   btn.onclick = sayHello;
// //   btn.onclick = sayAnkur;
//   btn.addEventListener("click" , sayHello);
//   btn.addEventListener("click" , sayAnkur);

// }

// // btn.onclick = function(){
// //     console.log('btn was click')
// // };


// function sayHello(){
//     console.log("hello ");
// }
// function sayAnkur(){
//     console.log("hello Ankur");
// }

    // random color 

    let btn = document.querySelector('button');

      btn.addEventListener("click" , function(){
       let h3 = document.querySelector('h3');
       let randomColor = getRandomNumber();
       h3.innerText = randomColor;
       let box = document.querySelector(".box");
       box.style.backgroundColor = randomColor;
    })
    

    function getRandomNumber(){
        let red = Math.floor(Math.random()* 255);
        let green = Math.floor(Math.random()* 255);
        let blue = Math.floor(Math.random()* 255);
        let color = `rgb(${red}, ${green}, ${blue})`;
         return color;
    }



