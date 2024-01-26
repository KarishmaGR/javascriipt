const user = {
    username:"karishma",
    price:999,
    welcome : function(){
        console.log(`Hello ${this.username} welcome to our website`);
    }

}

// user.welcome();
// user.username = "govind";
// user.welcome();

const varib = ()=>{
    console.log( typeof varib);
}


// varib();

let a = 3000;
var c =5000;
if(true){
    let a=30;
    const b=40;
    var c=50;
    console.log(`Inner c ${c}`);
}

// console.log(a); // will print 3000
// console.log(` Outer c ${c}`); //will print 50; // this is the problem came with var keyword it does not maintained scope 
// console.log(b);//will be undefined  because it is not in the global scope 


scope(); // will bw accesible due to hoisting
function scope(){
    let a = 50;
    if(true){
        let b = 70;
        console.log(`a is in parant function ${a}`);
    }

    // console.log(`b is in inner scope of the function ${b}`); // will show error b is not defined
}

//  fun1() // will show error of undefined because we have assign the function to a variable 
 //ReferenceError: Cannot access 'fun1' before initialization 
const fun1 = function(){
    const abc = "some value";
    function inner(){
        const innervar = "abcd";
        console.log(`inner function accessing the outer function variable ${abc}`);

    }
    inner();
    // console.log(`outer function trying to accessing the inner function variable ${innervar}`);  //will show eror of undefined
}

fun1()


