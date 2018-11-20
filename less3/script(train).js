// let num=15;
// function showFirstMassege(text) {
//     alert(text);
//     let num=10;
//     console.log(num);
// }
// showFirstMassege("Hello World");
// console.log(num);
function calc(a,b){
    return (a+b);
}
console.log(calc(3,4));
console.log(calc(8,4));

function retVar() {
    let num=50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

// console.log(calc2(3,4));
// let calc2 = function (a,b) {
//     return (a+b);
// }
// console.log(calc2(3,4));

let calc3 =(a,b) => a+b
console.log(calc3(3,33));


let str ='Test';
console.log(str.length); // свойства это вспомогательные значения
console.log(str.toUpperCase()); // методы это вспомогательные функции
console.log(str.toLowerCase()); 

let twelve = "12.2";
console.log(Math.round(twelve)); 

let twelve2 ="12.2px";
console.log(parseInt(twelve2)); //  
console.log(parseFloat(twelve2)); //

