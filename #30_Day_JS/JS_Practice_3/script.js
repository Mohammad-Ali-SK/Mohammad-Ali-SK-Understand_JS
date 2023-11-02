// document.querySelector("#center")
// .addEventListener("mousemove", (dets) => {
    
// })


const btn = document.querySelector("#center");


const throttleFunctiion =(func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev> delay){
            prev = now;
            return func(...args);
        }
    }
}

btn.addEventListener("mousemove", throttleFunctiion((dets) => {


    let div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    document.body.appendChild(div);

    let img = document.createElement("img");
    img.classList.add("image");
    img.setAttribute("src","https://plus.unsplash.com/premium_photo-1683120838840-c8efc0b6ee0c?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);



    setTimeout(() => {
        div.remove();
    }, 1000);

},500));


 