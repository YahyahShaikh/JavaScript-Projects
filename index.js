console.log("hello world")

let box=document.getElementById("newbox")
box.textContent="hello world"

let baz =document.querySelector(".text2")
baz.textContent ="HABIBI"
baz.style.color="green"
baz.style.height="20px"
baz.style.width="20px"
baz.style.backgroundColor="Blue"


let baza =document.querySelector("#text3")
baza.textContent ="HABIBI"

// DOM MANIPULATION ELEMENT
const cba = document.getElementById("abc")
console.log(cba.textContent);

let have = document.getElementById("hiii")
have.textContent += "I am bazaid";

let boxx = document.getElementById("ring")
boxx.textContent+= "I am bazaidd";


let abc = document.getElementsByClassName("mybox")[1];
abc.innerHTML = " from class";

var headings = document.getElementsByTagName("h2")[0];
headings.textContent += " changed second heading";

const allParas = document.querySelectorAll(".colorMe");
allParas.forEach((para)=>{
para.style.color ="GREEN";
});
