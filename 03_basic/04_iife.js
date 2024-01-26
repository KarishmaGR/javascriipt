//  why do we use iife  :  it is to remove pollution occure deu to glbal scoped defined variable for that we use iife invoke function as it is defined

//()() //  first parenthesis is for defining the function and second is for calling the function
// example 


(function call1(){
    // named IIFE
    console.log("hello DB connectd successfully");
})();   // here if we not closing the function execution by putting a semicolon a the end of the last parenthesis then it will stop the excecution of second IIFE function in the same file

(()=>{

    // Unnamed IIFE without name 
    console.log("hello DB connected successfully");
})();

// for passing the parameter
((name)=>{console.log(`Helle ${name} your DB has connected successfully`);})('karishm');   // this is how we can pass parameter 
