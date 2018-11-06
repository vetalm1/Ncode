'use strict';

var money = 0;
var date = new Date();
var time = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
money = +prompt("Введите бюджет","10000");
time = prompt("введите дату в формате YYYY-MM-DD",time);

let firstQ = prompt("Введите обязательную статью расходов в этом месяце");
let secondQ = +prompt("Во сколько обойдется?");
let expenses1 = {firstQ, secondQ};
firstQ = prompt("Введите обязательную статью расходов в этом месяце");
secondQ = +prompt("Во сколько обойдется?");
let expenses2 = {firstQ, secondQ};
    
let optionalExpenses = {};
let income = {};
let appData ={
    бюджет: money, 
    дата: time, 
    вопрос11: expenses1.firstQ, 
    вопрос12: expenses1.secondQ, 
    вопрос21: expenses2.firstQ, 
    вопрос22: expenses2.secondQ,
    НеОбязательныеРасх: optionalExpenses,
    ДопДоход: income,
    savings: false
};
let sr1day = (expenses1.secondQ+expenses2.secondQ)/2
console.log(appData.бюджет + "  " + appData.дата + "  "+appData.вопрос11+"  "+
appData.вопрос12);
console.log(appData.бюджет + "  " + appData.дата + "  "+appData.вопрос21+"  "+
appData.вопрос22);
alert("бюджет за 1 день = " + sr1day);
