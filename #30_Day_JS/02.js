// let and const 
// arrow functions
// template interals
// default parameters
// rest and spreadd function 
// destructuring 
// class
// Modules 
// promises
// async function 
// *try catch
console.log("Lets start")

let a;
a = 8;
console.log(a);

{
    let v = 98;
    console.log(v)
}

// fat arrow function 
let c = () => {};

// fat arrow functin with one pramitter  

let d = param => {console.log(param)};

// fat arrow function with impicit return;


let g = () => 13;
// g();
console.log(g());


// template literals backtick ``


// Default parameters

let lk = (a,g=0) => {
    return a + g;

}

console.log(lk(78,2))

// rest and spread function

let m = [1,2,3,4,5,6,7,8,9,10];

let n = [1,2,3,4,5,6,7,8,9,10];

let o = [1,2,3,4,5,6,7,8,9,10];
let ans = [...m,...n,...o];
console.log(ans);


// destructuring

let ogj = {
    k: 1,
    b: 2,
    c: 3,
}
let{k} = ogj;

console.log(k);