// const arow1 = (num1,num2)=> num1+num2;
// const arow1 = (num1,num2)=> (num1+num2);
//  const arow1 = (num1,num2)=>return (num1+num2); // return statement always be come inside the curly brace here it will not work


// const arow1 = (num1,num2)=>{ num1+num2}; // undefined  deu to not returning the value
// const arow1 = (num1,num2)=>{return num1+num2}; // will return the expression

// const arow1 = ()=> {name:"karishma"}  // will return undefined 
//  const arow1 = ()=> {return {name:"karishma"} } 
 const arow1 = ()=> ( {name:"karishma"} ) 



// console.log(arow1());

// function add(){
//     const username = "karishma"
//     console.log(this); // will print globle object
//     console.log(this.username); // undefined
// }

// const add =function(){
//     const username = "karishma"
//     console.log(this); // will print globle object
//     console.log(this.username); // undefined
// }
const add =()=>{
    const username = "karishma"
    console.log(this); // will print empty object
    console.log(this.username); // undefined
}




add();