'use strict'; // ошибки старых версий работать не будут.
//a = 5;
//console.log(a);

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj={};
console.log(4/0);
console.log("integer"*9);
let nichego;
console.log(nichego);
let person = {
    name:"John",
    age:25,
    isMaried:false 
};
console.log(person.name);
console.log(person["age"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];
console.log(arr[0]);
//alert("Hello world");
//let answer = confirm("Are you here?");
//console.log(answer);
//let answer2 = +prompt("Are your age 18 oor older?","da");
//console.log(typeof(answer2));
//console.log(answer2);
//console.log(5 + +" -object");
let incr=10, decr=10;

console.log(++incr);
console.log(--decr);
console.log(5%2);
console.log("2" === 2);
let isCheked = true, isClose = false;
console.log(isCheked && isClose); // && логич. оператор И
console.log(isCheked || !isClose); // || логич. оператор или
