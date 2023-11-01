// console.log("Starting")
// var timer = 60;
// var scoure = 0;
// let palenBtn = document.querySelector(".palen-btn");
// var hitran = 0;

// function countDown(){
//     scoure += 10;
//     document.querySelector("#Scoure").textContent = scoure;
// }

// function bubble(){
//     var cultter = "";
//     for(let i = 1; i <= 168; i++){
//         var rn = Math.floor(Math.random()*10);
//         cultter += `  <div class="ball">${rn}</div>`
//     }
//     document.querySelector(".palen-btn").innerHTML = cultter;
// };

// function timeChange(){
//    var timerint =  setInterval(() =>{
//         if(timer > 0){
//             timer--;
//             document.querySelector("#time").textContent = timer;
//         }
//         else{
//             clearInterval(timerint);
//             palenBtn.innerHTML = "Game Over";
//         }
//     },1000)

// }

// function ChangeHit(){
//     hitran = Math.floor(Math.random()*10) + 1;
//     document.querySelector("#hit").textContent = hitran;
// }

// palenBtn.addEventListener("click", (dets) => {
//     var clickNumber = Number(dets.target.textContent);
//     if(clickNumber === hitran){
//         // alert("You got it right");
//         countDown();
//         ChangeHit();
//     }
// })


// bubble();
// timeChange();
// ChangeHit();
// // countDown()


var palenBtn = document.querySelector(".palen-btn");
var timeChange = 60;
var hitran = 0;
var scoure = 0;


function bubble(){
    var cultter = "";
    for(let i = 1; i<=168; i++){
        var rn = Math.floor(Math.random()*10);
        cultter += `<div class="ball">${rn}</div>`
    }
    palenBtn.innerHTML = cultter;
}

function timer(){

    var timerint = setInterval(() => {
        if(timeChange > 0){
            timeChange--;
            document.querySelector("#time").textContent = timeChange;
        }
        else{
            clearInterval(timerint);
            palenBtn.innerHTML = "Game Over";
        }
    },1000)


}

function hitChange(){
    hitran = Math.floor(Math.random() *10);
    document.querySelector("#hit").textContent = hitran;
}

function changeSc(){
    scoure += 10;
    document.querySelector("#Scoure").textContent = scoure;

}

palenBtn.addEventListener("click", (dets) => {
    var click = Number(dets.target.textContent);
    if(click == hitran){
        changeSc();
        hitChange();


    }


    
})

bubble();
timer();
hitChange();
// changeSc();