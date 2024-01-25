const mysymbol = Symbol("mykey1");

const object = {
    name:"karishma",
    "age":21,
    "item price":23,
    plays :["cricket","football","hokey"],
    [mysymbol]:"my unique key",
    email:"kafasg@google.com",
}
const object2 = {
    a:1,
    b:3,
    c:4,
    d:5
}

// console.log(object.age);
// console.log(object["item price"]);
// console.log(object[mysymbol]);
// // console.log(object);
// console.log(Object.keys(object));
// console.log(Object.values(object));
// console.log(Object.entries(object));
// console.log(object.hasOwnProperty("plays"));


object.email;
object["item price"];

// other than wrinting above code for accessing object value we use simply object destructuring
const {email,"item price":ip,name} = object

console.log(email);
console.log(ip);

// json formate where key and value both will be in string form

// {
//     "name":"karishma",
//     "age":34,
//     "email":"karisha@gmai.com"
// }