let num = 50;
//if (num<49) {console.log("NEverno")}
//else if(num>100) {console.log("Mnogo")}
//else {console.log("Verno1")};
//(num==50) ? console.log("Verno") : console.log("NEverno");

switch (num) {
    case num < 49:
        console.log("NEverno");
         break;
    case num > 100:
        console.log("Mnogo");
        break;
    case 50:
        console.log("Verno!!!");
        break;
};

let num = 50;
while(num<55) {
    console.log(num);
    num++;
}

let num = 50;
do {
    console.log(num);
    num++;
}
while(num<55);

for (let i=1; i<8; i++) {
    if (i==6) {
        continue
    }
    console.log(i)
}

let x = 5; console.log( x++ ); 
console.log([ ] + false - null + true);
let y = 1; let x = y = 2; console.log(x);
console.log([ ] +1+2);
console.log("1"[0] );
console.log(2 && 1 && null && 0 && undefined);
console.log(  null || 2 && 3 || 4);
console.log(!!( a && b ) == (a && b));
let a = [1, 2, 3]; let b = [1, 2, 3]; 
console.log(a==b);
console.log(+"Infinity");
console.log("ёжик" > "яблоко");
console.log( 0 || "" || 2 || undefined || true || falsе );