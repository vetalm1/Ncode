let money, time;
function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	while(isNaN(money) || money=="" || money==null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
	budget: money, // ----это свойства объекта
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function() { // --- функции это методы объекта
		for (let i=0; i<2; i++){
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
			if ((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null
			&& a!='' && b!='' && a.length <50) {	
				console.log("done");
				appData.expenses[a] =b;
			} else {i--;}
		};
	},
	
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget/30).toFixed(); // tofixed delaet stroku
		alert("Ежедневный бюджет: "  + appData.moneyPerDay);
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100 ) {
			console.log("Минимальный уровень достатка")
		} 	else if (appData.moneyPerDay> 100 && appData.moneyPerDay < 2000 )  {
				console.log("Средний уровень достатка");
		} 	else if (appData.moneyPerDay > 2000) {
				console.log("Высокий уровень достатка");
		}else { console.log("Произошла ошибка")};
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений"),
			percent = +prompt("Под какой процент");
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
    },
    chooseOptExpenses: function() {
		for (let i=0; i<3; i++){
			let a = prompt("Введите статью не обязательных расходов", ''),
			b = prompt("Во сколько обойдется?", '');
			if ((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null
			&& a!='' && b!='' && a.length <50) {	
				console.log("done");
				appData.optionalExpenses[a] = b;
			} else {i--;}
		
		};
    },
    chooseIncome: function(){
        for (let j=0; j<1; j++) { 
            let items = prompt("что принесет дополнительный доход? (перечислите через запятую)", "");
            if ((typeof(items))==='string' && (typeof(items))!=null && items!='') {	
                console.log("done");
                appData.income = items.split(", "); // строку перевращаем в массив и помещаем в массив
            } else {j--;}
        }
        appData.income.push(prompt("может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function(item, i, mass){
            console.log("Способы доп. зароботка: " + ++i + ": "+item);
            alert("Способы доп. зароботка: " + i + ": "+item);
        });
        alert("Способы доп. зароботка: "  + appData.income);

        for (let key in appData) {
            console.log("Наша программа включает в себя данные: " + appData[key] );
        }
    }
};


