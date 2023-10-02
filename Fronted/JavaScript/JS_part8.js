// Array method 
//  😁  forEach 

/*
let arr = [1,2,3,4,5];


arr.forEach( (el) => {
    console.log(el);
})

arr.forEach(function(el) {
    console.log(el)
})

let print  = function(el){
    console.log(el)
};

arr.forEach(print) */


    //  😁  Map (same ase forEach)


    /*
    let arr = [1,2,3,4 ]

let double = arr.map( (el) => {
    return el * 2 
})
console.log(double) */


//  😁 filter 

/*
let arr = [1,2,3,4,3,4,6,464,35,19,2,3,];

let ans = arr.filter( (el) => {
    return el % 2 == 0 ;
})
console.log(ans) */

// 😁 reduce
/*
let num = [1,2,3,4,5,6,7]

let finalVal = num.reduce( (res,el) => {
    return res + el
})
console.log(finalVal); */

// 😁 find max 
/*
let arr = [ 1,2,3,4,5,6,7]

let max = -1 ;

for(let i = 0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(max)

let ans = arr.reduce( (max, el) => {
    if(max < el) {
        return el
    } else{
        return max
    }
})

console.log(ans) */


// 😁 find min
/*
let arr = [ 1,2,3,4,5,6,7]

let min = arr.reduce( (min, el) => {
    if(min < el) {
        return min
    } else{
        return el
    }
})

console.log(min); */

// 😁 default parameter 
/*
function sum(a,b=5){
 return a + b
}

console.log(sum(2))
*/


// 😁spread 

// let arr = [1,2,3,4,5]

// let newArr = [...arr]
// console.log(newArr);
// console.log(..."apnacollege")


// 😁 rest

// function sum(...args){
//     return args.reduce( (sum,el) => sum + el)
// }
// console.log(sum(1,2,3,4));

// 😁 Assignment question 
// question 1

/*
let arr = [2,3,4,5]

let sq = arr.map( (el) => {
    return el * el
})

console.log(sq);

let sum = arr.reduce( (res, el) => {
    return res + el
})

console.log(sum);

let avg = (sum / arr.length);
console.log(avg); */

// 😁 Assignment question 
// question 2
/*
let arr = [1,2,3,4,5];

let newArr = arr.map( (el) => {
    return el + 5
});
console.log(newArr); */

// 😁 Assignment question 
// question 3

/* 
let arr = ["a" , "b" , "C" , "R" , "A"];

let newArr = arr.filter( ( el) => {
    if(el === el.toUpperCase()){
        return el
    }
})

console.log(newArr) */

// / 😁 Assignment question 
// question 5

/*
let ob1 = {
    a: 1,
    b: 2
}
let ob2 = {
    c: 3,
    d:4
}

function mergeObject(a,b){
return {...ob1 , ...ob2}
}

console.log(mergeObject()) */