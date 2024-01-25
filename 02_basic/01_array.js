const arr = [12,"karishma",43,32];
const arr1 = new Array(2,14,58,"karishma");
// console.log(arr.copyWithin(3,1));   // replace the given index  element with  target element  here 3 is target elemetn and 1 is the index where change will happen

let mtArr = [9,6,7,8]

let myHero = ["saktiman","nagraj"];

// console.log(mtArr.push(9));
// console.log(mtArr.pop());

// console.log(mtArr.fill(5)); // modifies the original  array and fills all the index with provided element

let myArr = [5,8,6,3,7]
// console.log(myArr.unshift(9));
// console.log(mtArr.shift());

let newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice and splice
let sliceArr = [2,4,"kar","pra",3,45]
console.log(sliceArr.slice(-3));  // negetive  or - index works
console.log(`slices array  ${sliceArr}`);


let spliceArry = [2,4,6,56,57,"nam","karis"]
console.log(spliceArry.splice(-1,-3,500,600,800)); // - or negetive index not works
console.log(`spliced array is ${spliceArry}`);








// console.log(arr);
