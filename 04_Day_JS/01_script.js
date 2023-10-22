// Master Async JS 
console.log('Hello');
// setInterval(function(){console.log('Hello 2')},200);

// fetch 
// promoises


// callback Always function -------!!
// const myfunc = () => {
//     console.log('Hello INdia')

// };

// const ans = new Promise((res, rej) => {

//     if(false){
//         return res();
//     }else{
//         return rej();
//     }

// });

// ans.then(() => {
//     console.log('Hello India')
// }).catch(() => {
//     console.log('My India')
// })

// const ans = new Promise((res, rej) => {
//    const num  = Math.floor(Math.random() * 10);
//    console.log(num);
   

//    if(num < 5){
//     return res();
//    }else{
//     return rej();
//    }
   
// });

// ans
// .then(() => {
//     console.log("Number Is right")
// })
// .catch(()=> {
//     console.log('Number is wrong !')
// })

// const ans = new Promise((res, rej) => {
//     return res("Go back to home !!")
// });

// const p1 = ans.then((data) => {
//     console.log(data);
//     new Promise((res, rej) => {
//         return res('Khana Khaw');
//     })
    
// });

// const p2 = ans.then((data2) => {
//     console.log(data2);
//     new Promise((res, rej) => {
//         return res("Nehi hua");
//     })
// });

// // ans.catch(() => {
// //     console.log("Kuch Nehi")
// /


// Map , Filter , Reduse in Js


// const codding = ["js", "rubay", "java", "python"];

// const values = codding.forEach((item) => {
//     console.log(item);
//     // return item;
// });

// console.log(values);

// const myNums = [1,3,2,4,5,6,7,8,9,10];


// const ans = myNums.filter((item) => {
//     return item < 9;
//     // console.log(item)
// }
// );

// console.log(ans);

// const myNums = [1,3,2,4,5,6,7,8,9,10];

// const ans = myNums.map((item) => {
//     return item + 10;
// })

// console.log(ans);


// const ans = myNums.map((num) => {
//     return num + 10;
// }).map((item) => {
//     return item + 1;
// });

// console.log(ans);


// const myNums = [1,2,3];
// const ans = myNums.reduce((acc, currv) => {
//     console.log(`The ${acc} and ${currv}`)
//     return acc + currv;
// });

// console.log(myNums);

 