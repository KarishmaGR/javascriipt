const PromiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Async Task One is Completed')
        resolve();//   without this line promise will not pass to the then part of promise 
    },1000)
})

PromiseOne.then(()=>{
  console.log("Promise one Completed")
})


new Promise(function(reject,resolve){
    setTimeout(() => {
        console.log('Promise Task two is Completes')
        reject();
    }, 1000);
}).then(()=>{
    console.log("Promise Two then part")
})


//  how we will pass data in resolve callback 
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Passed some data in resolve argument in promis Three")
        resolve({name:"karishma",age:21})
    },1000)
})

PromiseThree.then((user)=>{
    confirm.log(user)
})