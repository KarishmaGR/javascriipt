// truthy value
// "0" , 'false', " ",{},[],function(){}


//falsy value
// 0 , -0 ,"", BigInt, 0n , Null , Undefined , NAN

const userArr= [];
if(userArr){
    //console.log("Array is empty still coming inside if condition block");
}else{
    // console.log("This block is not executed");
}
if(userArr.length===0){
    //console.log(`user Array`);  // will output 
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    //console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")