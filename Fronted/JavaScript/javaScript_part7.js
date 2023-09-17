console.log("welcome part 7");


// console.log("Hiii there!");

// setTimeout( () => {
//     console.log("Apna college")
// } , 3000);

// console.log("welcome to");

// let id = setInterval( () => {
//  console.log("Hii ankur")
// }, 2000)

// clearInterval(id); ye 


const student = {
    name:"ankur",
    age:20,
    

    // normal function 
    getName: function(){
        console.log(this);
        return this.name
    },
    //  arrow function
    getMarks: () =>{
        console.log(this);
        return this.name
    }
};