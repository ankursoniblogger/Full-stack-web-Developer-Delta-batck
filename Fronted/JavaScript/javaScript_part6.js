console.log("hello world! ");

function printPoem(){
    console.log("Twinkle Twinkle litlis start ");
}

// printPoem();

// rool dice game 
// function dice(){
//     while(true){

//         let random = Math.floor(Math.random()*6 ) +1;
//         // console.log(random);
//       if (random == 6 ) {
//         console.log("Yoy won the game  !" , random);
//         break;
//       } else{
//       console.log(random)  ;
//       break;
//       }

//     }

// }
// dice();



// console.log( Math.floor(Math.random()*6 ) +1 );

function avg(a,b,c){
    // console.log(`average of three number is (${a}+ ${b} + ${c})/3 ` )
    console.log((a+b+c)/3);
}
// avg(2,3,4);
// avg(10,10,10);


// function table(){
//     let n = 28 ;
//     for(let i=n; i<=n*10; i+=n){
//         console.log(   `${i} * ${i} = ${n*i}` )
//     }
//     // console.log( )
// }

function table2(n){
    for(let i=n;i<=n*10; i+=n){
        console.log(i)
    }
}


// table();
// table2(10);

function sum(a,b){
    return a+b;
}

// console.log(sum(2,3))


// 1 se  leker n tak sare number ko print krna hain 

function getSum(n){
  let sum = 0;
    for(let i=1;i<=n; i++){
           sum = sum + i
    }
    return sum;
}

// console.log(getSum(3));

// assignment question 



// let start = 100;
// let end = 200;

// function getRandom(start,end){
//     let diff = end-start;
//     return Math.floor(Math.random()*diff) + start;
// }

// console.log(getRandom(122))