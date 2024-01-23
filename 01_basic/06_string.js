const sentence = "  the quick brown fox jumps over the lazy dog!  ";


console.log(sentence.length);
console.log(sentence.at(-5)); //accepts both  negetive and positive value
console.log(sentence.charAt(5)); //does not accepts negetive value
// console.log(document.body.innerHTML = sentence.blink());
console.log(sentence.endsWith("dog"));


const icons = '☃★♲';
console.log(`Character Code ${icons.charCodeAt(2)} is equal to character  ${icons.charAt(2)}`);
console.log(`Code point is ${icons.codePointAt(2)}`);

console.log(String.fromCharCode(120 ,145 ,93 ,45));
console.log(sentence.indexOf('g'));


const strings = [
    "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
    "abc",
    "ab\uD83D\uDE04c",
]

for(const str of strings){
    console.log(str.isWellFormed());

}

console.log(`last index of dog is ${sentence.lastIndexOf('dog')}`);
console.log(sentence.valueOf());

console.log(sentence.trimStart());
console.log(sentence.trimEnd());
console.log(sentence.trim());

console.log(sentence.toString());
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.substring(4,8));
console.log(sentence.startsWith("  the"));
console.log(sentence.split(" "));
console.log(sentence.slice(1,20));
console.log(sentence);

const regex = /[^\w\s']/g;
console.log(sentence.search(regex));

console.log(sentence.replace("dog","cat"));
console.log(sentence.replaceAll(" ","-"));
console.log(sentence);
const word = "happy "
console.log(` I found it ${word.repeat(4)} `);

let num1 = "25467896532145";
console.log(num1.length);
let lastString = num1.slice(-4);
console.log(lastString.padStart(num1.length,"*"));
console.log(lastString.length);