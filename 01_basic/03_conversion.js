let score = true;
let score0 = Number(score);
console.log(typeof score0);
console.log(score0);

let score1 = "33";
let score11 = Number(score1);
console.log(typeof score11);
console.log(score11);


let score2= null;
let score21 = Number(score2);
console.log(typeof score21);
console.log(score21);


let score3 = undefined;
let score31 = Number(score3);
console.log(typeof score31);
console.log(score31);

let score4 = "33abc";
let score41 = Number(score4);
console.log(typeof score41);
console.log(score41);


// number
// 1
// number
// 33
// number
// 0
// number
// NaN
// number
// NaN



let bool = 1;
let bool1 = Boolean(bool);
console.log( typeof bool1);
console.log(bool1);

let bool2 = 0;
let bool22 = Boolean(bool2);
console.log(typeof bool22);
console.log(bool22)


let bool3  = "";
let bool33 = Boolean(bool3)
console.log(typeof bool33);
console.log(bool33);

let bool4 = "karishma";
let bool44 = Boolean(bool4);
console.log(typeof bool44);
console.log(bool44);

// boolean
// true
// boolean
// false
// boolean
// false
// boolean
// true


let string = 33;
let string1 = String(string);    
console.log( typeof string1);
console.log(string1);

// string
// 33


// ****************************************Operation ******************************************************//


// Normal maths
// console.log(1+1);
// console.log(1-1);
// console.log(1*1);
// console.log(1/1);
// console.log(1%1);



console.log(1+ "1");
console.log("1" + 1);
console.log("1" +"2");
console.log( 1 + 2 + "1" +"2");
console.log("1" +"2" + 2);


console.log(+true);
console.log(+"");