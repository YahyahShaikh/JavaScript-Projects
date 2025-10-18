console.log("Hello")

function updateclock (){
    
let now = new Date();
console.log(now)

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

const hrs = document.getElementById("hours").textContent=h;
const mins = document.getElementById("mins").textContent=m;
const secs = document.getElementById("secs").textContent=s;


}
setInterval(updateclock,1000)
updateclock();