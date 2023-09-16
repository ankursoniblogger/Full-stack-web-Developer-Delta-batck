console.log("hello world! . Welcome to javaScript Part 6 . Ankur soni");

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



// question no 1 

let arr = [2,4,6,1,4,5,2,77,9,4,10];
let num = 5;

function getElement (){
    for(let i=0;i<=arr.length;i++){
        if(arr[i] > num){
            console.log(arr[i])
        }
    }
}
// getElement();

// Qs2.
// let str = "abcdefghialksa";

// function ectract(str){
//     let ans = "";
//     for(let i=0;i<=str.length;i++){
//         let currChar = str[i];
//         // console.log(currChar)
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar
//         }
//     }
//     return ans;
// }
// // ectract(str);
// // console.log(ectract(str))

// Qs3 

let country = ["india", "australia" , "Usa", "brazil"];

function longCountry(){
    let ansInd = 0;
    for(let i=0;i<country.length;i++){
        // console.log(country[i])
        // console.log(country[ansInd].length)
        let ansLen = country[ansInd].length;
        let currLen = country[i].length;
        if(currLen> ansLen){
            ansInd = i;
        }
    }
    return country[ansInd];
}

// let res = longCountry();
// console.log(res);

// Qs 4

let str = "apnacollegeeee";

function countVowels(){
    let count = 0;
    for(let i=0;i<=str.length; i++){
        console.log(str[i])

        if(
            str.charAt(i) == "a" ||  str.charAt(i) == "e" ||  str.charAt(i) == "i" ||  str.charAt(i) == "o" ||  str.charAt(i) == "u"
        ) {
             count++;
        }

    }
    return count
}

//  let res = countVowels()
//  console.log(res)

// Qs5 

let start = 100;
let end = 200;

function range(){
    let diff = end - start;
  let random = Math.floor((Math.random()*diff) + start)
  console.log(random)
}

// range()