let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false; //поместить в опшонс переменую булл и значение файлс
options.colors = { //добавляем в опшонс еще один объект
    border: "black",
    bg: "red"
};

delete options.bool; // удаляем булл из опшонс
console.log(options);

for (let key in options) { // перечисляет свойства с их значениями, кей это переменная
    console.log('свойство ' + key + ' имеет значение' + options[key]);
} // типа хитрый цикл
console.log(Object.keys(options).length); // узнать сколько свойств в объекте опшонс

let arr = [1,2,3,4,5];
arr.pop(); //удаляет последний элемент массива
arr.shift(); //уделить первый элемент массива
arr.push("5"); //добавить 5 в виде строки в конец массива
arr.unshift("1") // добавить "1"  первым элементом массива

console.log(arr);
for (let i=0; i<arr.length; i++) { //лэнг это длинна массива кол-во элементов включая пустые
    console.log(arr[i]);
}

arr.forEach(function(item, i, mass){
    console.log(i+": "+item+"(массив: "+mass+")");
});// такая форма цикла для массивов 
//item - значение элемента, i - номер элемента, mass - сам массив см.хелп.

let mass=[1,2,3,6,7];
for (let key in mass) {// но если in заменить на of то выведутся именно значения элементов массива
    console.log(key);
} //это мы вывели номера элементов массив

let ans = prompt("",""), //перечисляем в запросе элементы через запятую
    arr1 =[]; //создаем массив
    arr1= ans.split(","); // сплит - метод помещает элементы из строки в массив, запятая это разделитель
    console.log(arr1);

    let arr2 =["qqq","www","ppp", "ttt"]
    i=arr2.join(", "); //этот метод берет каждый элемент массива склеивает в строку
    console.log(i);

  let arr3 =[1,3,15,10,4]
    i=arr3.sort(); // сортировка элементов массива но сортируит их как строки
    console.log(i);

  
    function compareNum(a,b){return a-b;}
    i=arr3.sort(compareNum); // сортировка массива но сортируит их как числа
    console.log(i);

let soldier = { //Obekt soldat
        health: 400,
        armor: 100
};
let john ={ //объект Джен
    helth:150
};
john.__proto__=soldier; // наш джон это потомок солдата
console.log(john); console.log(john.armor);