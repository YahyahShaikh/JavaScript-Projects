console.log("Hello World")
const quotes =[
"The best way to get started is to quit talking and begin doing. Walt Disney",

"Success is not in what you have, but who you are. Bo Bennett",

"Selieve you can and you're halfway there. Theodore Roosevelt",

"Don't watch the clock; do what it does. Keep going. Sam Levenson",

"Keep your face always toward the sunshine-and shadows will fall behind you.Walt Whitman"
];
function generateqoute(){
    const randomIndex= Math.floor(Math.random()*quotes.length);
    console.log(generateqoute)
    document.getElementById("quote").textContent= quotes[randomIndex];
}

function generateotp(){
    const otp= Math.floor(Math.random()* 10000);
    document.getElementById("otp").textContent=otp;
}