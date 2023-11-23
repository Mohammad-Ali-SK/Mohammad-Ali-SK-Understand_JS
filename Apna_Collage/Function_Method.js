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

// countVol("Hello");

