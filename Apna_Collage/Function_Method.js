// Function In JS 
function Hello(){
    console.log("Ali")
};
// Hello();-

// Mordern JS
const NAME = (f) =>{
    console.log(f)
};
// NAME("Mohammad");


function myfunc(){
    for(let i = 0; i<=9; i++){
        console.log(i);
    }
};
// myfunc();

const countVol = (str) => {
    let count = 0;
    for(let count of str){
        if(str === "a" || str === "e" || str === "i" || str === "o"){
            count++;
        }
    };
    console.log(count);
};

countVol("Hello");
let arr = [3,33,45,67];
arr.forEach((e,i) => {
    console.log(i,e ** 2);
});

// Higer Order Function / Method **** is ForEach function

// Some More important Array Methods 
// Map();
arr.Map();
let arr2 = [1,2,3,4,5,6,7,8];
const ma_p = arr2.filter((e) => {
    return e < 3;
});
console.log(ma_p);

// Reduce();

let newArr = [1,2,34,5];
const outPut = arr.reduce((res,curr) => {
    return res + curr;
});

console.log(outPut);

let n = prompt("Enter the number -");
let arr4 = [];
for(let i = 0; i <=n; i++){
    arr4[i-1] = i;
}
console.log(arr4);
