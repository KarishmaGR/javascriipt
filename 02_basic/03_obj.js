let obj = {
    231:"karishma",
    250:"pragati",
    520:"govind",
    112:"santosh"
}

let sortedobj = {}
const objkeys = Object.keys(obj);
// console.log(objkeys);

objkeys.map((ele ,i)=>{
    sortedobj[ele] = obj[ele];
})

// console.log(sortedobj);

const height = [231,220,112,140]
const names = ["suraj","muraj","kuraj","nuraj"];

let obj2 = Object.assign({},...height.map((key,i)=>({[key]:names[i]})));


console.log(Object.values(obj2));
