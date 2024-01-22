// ?Primitive Data Types
// 7 Types  String, Number , Bollean , BigInt, Symbol , Null , Undefined



//  Non Primitive Data Types
// Array , Object , Function 

const arracy = ["name", 23 ,"SDSM"];

let Obj1 = {
    "name":"karishma",
    "age":21,
    "func" : ()=>{
        console.log("Object Printing");

    },
    "College":{
        "name":"SDSM",
        "Degree":"BSC-CS"
    }

}

const myFunction = function (){
    console.log("My function");
}


console.log( "array type", typeof arracy);
console.log( "object type", typeof Obj1);
console.log( "function type", typeof myFunction);
console.log("Null type" , typeof null);
console.log("Undefined type" , typeof undefined);


let num1,num2,num3 = 15;
console.table([num1,num2,num3]);