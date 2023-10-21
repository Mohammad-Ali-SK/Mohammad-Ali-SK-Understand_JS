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
// // })
