// console.log("Starting")
var timer = 60;
var scoure = 0;
let palenBtn = document.querySelector(".palen-btn");
var hitran = 0;

function countDown(){
    scoure += 10;
    document.querySelector("#Scoure").textContent = scoure;
}

function bubble(){
    var cultter = "";
    for(let i = 1; i <= 168; i++){
        var rn = Math.floor(Math.random()*10);
        cultter += `  <div class="ball">${rn}</div>`
    }
    document.querySelector(".palen-btn").innerHTML = cultter;
};

function timeChange(){
   var timerint =  setInterval(() =>{
        if(timer > 0){
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else{
            clearInterval(timerint);
        }
    },1000)

}

function ChangeHit(){
    hitran = Math.floor(Math.random()*10) + 1;
    document.querySelector("#hit").textContent = hitran;
}

palenBtn.addEventListener("click", (dets) => {
    var clickNumber = Number(dets.target.textContent);
    if(clickNumber === hitran){
        // alert("You got it right");
        countDown();
        ChangeHit();
    }
})


bubble();
timeChange();
ChangeHit();
// countDown()