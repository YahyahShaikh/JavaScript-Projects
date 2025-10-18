// console.log("Hello World")

// var name1 ="bazaid";
// console.log("my name is " +name1)

// let num3 = 10
// let num = 20;
// console.log(num3 + num)

// var num1 = 20;
// var num2 = 20;
// num3=num1+num2
// console.log(num3)
// console.log(num1 - num2)

// let str1 ="bazaid ";
// let str2 = "hafizi";
// let result =str1+str2
// console.log(result);

let age2=60
if(age2<=18)
{
    console.log("you are adult")
}
// else if(age2>=50){
//     console.log("you are old")
// }
else{
    console.log("you are under age")
}

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }
// for (let i = 0; i <=50; i++) {
// console.log(i+" bazaid will be our teacher for today")
// }

// let box="boy"
// if(box=="boy"){
//     console.log("blue")
// }
// else{
//     console.log("purple")
// }

// let box =""
// if(box=="boy"){
//     console.log("blue")
// }
// else if(box=="girl"){
//     console.log("pink")
// }
// else{
//     console.log("purple")
// }

// function greet(name,surname) {
//     return "hello " +name +" "+ surname +"!";
// }
// console.log(greet("bazaid","hafizi"));

// function ADD(a,b) {
//     return a+b;
// }
// console.log(ADD(2,4));
// console.log(ADD(3,4));

// let n=2
// if (n%2==0){
// console.log("the number is even")
// }
// else{
//     console.log("the number is odd")
// }

// for(i=0; i<=10; i++){
//     console.log(i*5)
// }

var name1 = "bazaid"
console.log(name1)

let a = 2
let b = 4
let result =a+b
console.log(result)

for (i=1; i<=5; i++){
    console.log(i)
}

let st ="bazaid"
for (i=0; i<=st.length; i++){
    console.log(st[i])
}

let str = "b"
let str1 = "a"
let str2 = "z"
let str3 = "a"
let str4 = "i"
let str5 = "d"
console.log(str)
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str4)
console.log(str5)

let n=2
if(n%2==0){
    console.log("number is even")
}
else
{
    console.log("number is odd")
}

let arr = ["mango","apple","banana","orange","watermelon"]
for (i=0; i<=arr.length;i++){
    console.log(arr.length[i])                              
}


for(i=10; i>=1;i--){
    console.log(i)
}

let age =17
if (age>=18){
    console.log("age is above 18")
}
else {
    console.log("age is below 18")
}

let total =0
for(i=1; i<=10; i++){
    total+=i;
    console.log(total)
}

let num =-2
if(num>0){
    console.log("num is positive")
}
else{
    console.log("num is negative")
}


let marks=45
if(marks>=90){
    console.log("Grade A")
}
else if(marks>=70){
    console.log("Grade B")
}
else if(marks>=40){
    console.log("grade c")
}
else{
    console.log("fail")
}

let isRaining = true
let haveUmbrella =true
if(isRaining){
if(haveUmbrella){
    console.log("go out side")
}
else{
    console.log("don't go outside")
}
}

let color ="red"
switch(color){
    case"red":
    console.log("stop")
    break;
    case"green":
    console.log("go")
    break;
    default:
        console.log("wait")
}

let j=1;
while(j<=6){
    console.log("while loop:",j);
    j++;
}

let k=1;
do{
    console.log("do while loop:",k);
    k++;
}while(k<=6);

let arr1=["apple", "mango", "banana",]
console.log(arr1)

const fruits=["apple", "mango", "banana",]
for (let fruit of fruits){
    console.log(fruit)
}

const arr =["mango","apple","kiwi",]
for (let fruit of arr  ){
    console.log(fruit)
}

let ij ={shirt:"4",tshirt:"7",jeans:"8"}
    console.log("i have " +ij.shirt +" shirts")

let kit ={bat:"3",ball:"4",jersey:"3",}    
for (let item in kit){
    console.log("i have "+ kit[item] + " "+item)
}

let baz;
    console.log(baz)

let name ="bazaid"
let age1 =22;
let isonscholarship =true
let skills = ["html","css","java script","sql"]
let address={
    city : "mumbai",
    pincode : "400009"
}
console.log("my name is "+ name)
console.log("my age is " + age1)

for (i=0;i<skills.length-1;i++){
    console.log("my top 3 skills are "+skills[i] )
}
for(add in address){
    console.log(add+": "+address[add])
}
 
function greet (){
    console.log("hello world")
}
greet()

function greet (name){
    return ("hello " + name)
}
console.log(greet("bazaid"))

function add(a,b){
    return a+b;
}
console.log(add(2,3))

function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3))

function sqaure(a){
    return a*a;
}
console.log(square(3))