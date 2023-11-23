// Arrays in JS -- Collections of Items;
// Array is a mutable object 

let heros = ["ironman","hulk","saktiman"];
// for(let key in heros){
//     console.log(heros[key]);
// }
// console.log(heros);
// for(let i = 0; i<heros.length; i++){
//     console.log(heros[i])
// };

//** Always use for loop  */

// const marks = [890,230,340,120,780,900];
// let sum = 0;
// let total = 0;
// for(let num of marks){
    // sum += num;
    // total = marks.length;
    // console.log(`Avarage marks id ${sum/total}`);
//     let offer = num / 33;
//     let Prize = num - offer;
//     for(let i of Prize){
//         console.log(i);
//     }

    
    
// };
// console.log(Math.floor(sum/marks.length));
// console.log(sum);
// console.log(total);
// const lol = marks.forEach((mark) => {
//     // console.log(mark);
//     sum += mark;
//     console.log(marks.length);
// });
// console.log(sum);

// const marks = [890,230,340,120,780,900];
// for(let i = 0; i<marks.length; i++){
//     let offer = marks[i] / 10;
//     // console.log(marks[i])
//     marks[i] -= offer;


// };
// console.log(marks);


// Array In jS;-------------------Method's

// Push("add value",);
// Pop();
// toString();
let num_1 = [23,34,12,78];
let num_2 = [66,89];

let full_name = [...num_1, ...num_2];
let full_name2 = num_1.concat(num_2);
console.log(full_name);