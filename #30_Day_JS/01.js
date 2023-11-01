// Cheak Array 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = Array.isArray(arr);
console.log(result);
const obj  = {
    1: "A",
    2: "B",
    3: "C"
};

const result2 = Array.isArray(obj);
console.log(result2);

// okbject hai ek bande ki details ko store karna 

// blank object

const obj1 = {};
const result3 = Array.isArray(obj1);
console.log(result3);
// filled object



const obj2 = {
    1: "A",
    2: "B",
    3: "C"
};

// obj2.1 = "v";

// higher order funcs 1.)
// constructor function 2.)
// frist class function 3.)
// new keyword 4.)
// iife 5.)
// prototype inheritance 6.)
// this call apply bind 7.)
// pure & funcs 8.)
// closer  9.)


//  1.0 -> aisa function jo accept karle ek or function ya fir wo return karle ek or function

// 2.0)
function circular(name,age,gender,favsong){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.favsong = favsong;
}
circular();

const student1 = new circular("Mohammad",21,"male","Rabta")
console.log(student1);


// 3.0)

