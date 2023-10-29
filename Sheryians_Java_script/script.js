
// Understand JavaScript : sync and async functions !!
console.log("Hello world 1");
setTimeout(() => {
    console.log("Hello ");
}, 1000);
console.log("Hello World 2");


// Js is not asynchronous !

// Event loop help to two way conversions  ------ inportant question for interview  !!

// Understand Promise ---!!

const ans = new Promise((resolve, reject) => {
    if(false){
        return resolve();
    }else{
        return reject();
    }

});

ans
.then(() => console.log("success"))
.catch(() => console.log("error"))
