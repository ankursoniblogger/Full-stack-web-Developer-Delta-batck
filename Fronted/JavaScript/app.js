// assignment question part 2 
// question 1 

// let num = 10 ;

// if(num % 2 == 0){
//     console.log("Good");
// } else{
//     console.log("bad");
// }

// question 2 

// let name = prompt(" what is your name ?");
// let age = prompt(" what is your age ?");
// alert(`Your name is ${name} and you are  ${age} years old. :) `);
// console.log(name);
// console.log(age);


// question 3 switch statment


// switch () {
//     case 1 :  console.log("Jan , feb , march , april ");
//         break;
//     case 2 :  console.log("Jan , feb , march , april ");
//     default:
//         break;
// }


// question 4 

// let str = "ankur soni";

// if((str.charAt(0) == "A" || str.charAt(0) == "a" ) && str.length > 5 ){
//         console.log("Golden string");
// } else {
//     console.log("NOt golden string ");
// };

// question 5 

// let num1 = 20 ;
// let num2 = 18 ;
// let num3 = 19 ;


// if(num1 > num2 && num1 > num3){
//     console.log("Num1 is greater than all of these ");
// } else if(num2 >num3 ){
//     console.log("Num2 is greater ");
// } else{
//     console.log("Num 3 is greater");
// }

// question 6 bonus question 
/*
let num1 = "31212223";
// console.log(num1.charAt(num1.length-1));
let num2 = "47852123";
// console.log(num2.charAt(num2.length-1));

if(num1.charAt(num1.length-1) == num2.charAt(num2.length-1)){
    console.log("There last digit are same");
} else{
    console.log("Last digit are diff");
}*/


// let str = "Ankur soni";
// console.log(str[0]);


// javaScript part 3  
// practice question 

// Question 1
// let msg = 'help!' ;
// console.log(msg.trim().toUpperCase());

// question 2
// let name = "ApnaCollege " ;
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna" , "Our"));


// practice question 
// let month = ["january" , "july" , "march", "augest"];

// console.log(month.splice(0,2, "july","june"));

// Array method 

// let cars = ["maruti", "xuv", "toyota", "farri" ];

// console.log(cars);

// let num = [ [1,2], [3,4], [5,6]];

// practice question part 3 
// nesting array 

// let game = [ ["X" , null , "O"], [null, "X" , null], ["O" , null , "X"] ];


// Assignment question part 3 

// let arr = [7,9,0 ,-2];
// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans);

// let ans2 = arr.slice(arr.length-n);
// console.log(ans2);

// question 3 Write a js program to check string are empty are not 
/*
let str = "";
let str1 = str.trim();
if(str1.length == 0){
    console.log("String are empty");
} else{
    console.log("string are not empty");
}
*/

// if(str == ""){
//    console.log("string is empty");
// } else if(str == " "){
//     console.log("String is empty but space are given");
// }
//  else{
//     console.log("string are not empty");
// }



// question 4 
/*

let str = "ApNaCollege";
let char = 5;

if(str[char] == str[char].toLowerCase()){
    console.log("Character is lower case");
} else{
    console.log("character is not lower case");
}
*/

// javaScript part-4 

// print odd number 
 /*for(let i = 1; i<=15; i++){
    if(i % 2 != 0){
        console.log(i);
    }
 }*/

// 2nd method 
// for(let i=1; i<=15;i=i+2){
    // console.log(i);
// }

// print all even number from 2 to 10 
// for(let i=2;i<=10;i=i+2){
    // console.log(i);
// }

// print multiple table of 5
// for(let i=5;i<=50;i=i+5){
    // console.log(i);
// }

// let x = prompt("Enter a number :) ");
// x = parseInt(x);
// for(let i=x;i<=x*10;i=i+x){
    // console.log(i);
// }

// Favorite movie 
/*
let movie = "avtar";
let guess = prompt("Guess My Favorite movie");

while( (movie != guess) && (guess != "quit") ){
    guess = prompt("Wrong guess . Please try again ");
}

if(guess == movie){
    console.log("Congrate!! :)")
} else{
    console.log("You Quit the game  :( ")
} */

// uses of break and continue 
/*
let i = 1;
while(i<=5){
    // if(i == 3){
    //     console.log("Break point 3");
    //     break;
    // }
    console.log(i);
    i++ ;
}*/

// let array = ["banana","apple", "pineapple", "grapesh"];

// for (let i=0;i<array.length;i++){
//     console.log(  i, array[i]);
// }