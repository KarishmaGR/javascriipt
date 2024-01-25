console.log("k");
console.log("a");
console.log("r");
console.log("i");
console.log("s");
console.log("h");
console.log("m");
console.log("a");


// now if we want the above code to run one more time the we have to write the same code again without using function there is no any other method that can be used to print this type of operation multipal time other than funtion
// now lets write a function
function print(){
console.log("k");
console.log("a");
console.log("r");
console.log("i");
console.log("s");
console.log("h");
console.log("m");
console.log("a");

}
// now this above function can be used to print multipal times the name karishma
print // this represent only function reference it will not log anything for that we have to call the function by using parenthesis
print();  // 


//  write a function to add two numbers   here in the function what we have passes in the parenthesis is known as parameters it can be of any dataType
function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}

// now lets call the above funtion 
addTwoNumbers(3,5);   // here what we have passed in the parenthesis is known as arguments 
 

//  now if we want to store the funtion in a variable then we can do so like this
const result = addTwoNumbers(4,6)  // now here if we print the variable result it will be nothing in the result because the function does't return anything 
console.log(`result is ${result}`);

function addTwoNumber(number1,number2){
    const result = number1+number2;
    return result;
    // here after reaching to the return statement function will get out of the scope after return statemment we cant print anythig
    // console.log("will not print")
}

const result2 =addTwoNumber(4,6)
// now here the result2 variable will store the output of funtion  returns
console.log(`result is ${result2}`);
