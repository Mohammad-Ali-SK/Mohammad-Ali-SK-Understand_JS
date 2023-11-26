// Dom Manipulation in JS

// Properties:
// tagname:
// innerText:
// innerHTML: *****
// textContent:
// div.getAttribute("id","class");
// setAttribute("class","add new class");
// node.style;

// let el = document.createElement("div");

let div = document.querySelector("div");
console.dir(div);
div.style.backgroundColor = "black";
div.style.color = "#fff";
let el = document.createElement("button");
el.innerText = "click me";
// div.append(el);
// div.prepend(el);
// div.before(el);
// div.after(el);

// Dom _Part_2
// DOM_Manipulation
// Insert Element's
// 1.0) node.append();
// 2.0) node.prepend();
// 3.0) node.before();
// 4.0) node.after();
// 5.0) classList.add(); //classlist.remove();

// Delete Element 
// node.remove();
// div.remove();
