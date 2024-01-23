const myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());


// console.log(typeof myDate);

const dateNow =Date.now();
console.log(dateNow);

console.log(`my Date is ${myDate}`)

console.log(myDate.toLocaleDateString());
console.log(myDate.getFullYear());

setTimeout(()=>{
    let date = Date.now();
    console.log(`time difference is ${(Math.floor(date-dateNow))/1000}`)
},3000)