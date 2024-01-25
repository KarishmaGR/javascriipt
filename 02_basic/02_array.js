const arr = [1,2,3,4,5,[4,5,9,7],[2,4,6]];
const arr1 = [5,6,7,8,9,10,11,12];

const arr12 = arr.flat(Infinity);
console.log(`arr12 is ${arr12}`);
const arr3 = [...arr12,...arr1];

console.log(arr3);

let arr4 = [6,6,7,8,43,16,11,12];

console.log(Array.from('karishma'));
console.log(Array.of('Karishma'));
console.log(Array.of({"karishma":"nams"}));
let score1= 100;
let score2= 200;
let score3= 400;
let score4= 500;
console.log(Array.of(score1,score2,score3,score4));

