'use strict';

let money,time;
function start() {
	money = +prompt("Ваш бюджет на месяц?");
	time = prompt("Введите дату в формате YYYY-MM-DD" , "YYYY-MM-DD");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?");
	}
}
start();

var appData = {
cash : money,
timeData : time,
expenses : {},
optionalExpenses : {},
income : [],
savings: true
};

function chooseExpenses() {
	for (let i=0; i<2; i++) {
	let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце"),
	secondAnswer = +prompt( "Во сколько обойдется?");

	if (typeof(firstAnswer)==='string' && (typeof(firstAnswer) != null ) && (typeof(secondAnswer) != null ) 
		&& firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 25) {

		appData.expenses[firstAnswer] = secondAnswer;
	} else i-- ;
}
}
chooseExpenses();



// цикл while

// let i = 0;
// while (i<2) {
// 	let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце"),
// 	secondAnswer = +prompt( "Во сколько обойдется?");

// 	if (typeof(firstAnswer)==='string' && (typeof(firstAnswer) != null ) && (typeof(secondAnswer) != null ) 
// 		&& firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 25) {

// 		appData.expenses[firstAnswer] = secondAnswer;
// 		i++;
// 	} else i = i;
// }

// цикл DO
// let i=0;
// do {
// 	let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце"),
// 	secondAnswer = +prompt( "Во сколько обойдется?");

// 	if (typeof(firstAnswer)==='string' && (typeof(firstAnswer) != null ) && (typeof(secondAnswer) != null ) 
// 		&& firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 25) {

// 		appData.expenses[firstAnswer] = secondAnswer;
// 	i++;
// 	} 
// }

// while (i<2);



let budget;
function detectDayBudget(){
	budget = (money/30).toFixed(2);
	alert("Ваш бюджет на 1 день составляет " + budget + " грн");
}


function detectLevel() {
	if(budget<200) {
		alert("у Вас минимальный уровень достатка");
	} else if(budget>200 && budget<500) {
		alert("у Вас средний уровень достатка");
	} else if(budget>500 && budget<1000) {
		alert("у Вас высокий уровень достатка");
	} else if(budget>1000) {
		alert("Вы богатый человек");
	}
}
detectDayBudget();
detectLevel();

function checkSavings(){
	if (appData.savings == true) {
		let save = +prompt("Какая сумма депозита ?"),
		 	 percent = +prompt("Какая годовая процентная ставка?");
		appData.monthIncome = (save/100/12*percent).toFixed(2);
		alert("Ежемесячный доход от депозита :  " + appData.monthIncome + "грн");
	}
}
checkSavings();

function chooseOptExpenses() {
	for(let i=0; i<3; i++) {
		let firstAnswer = prompt("Статья необязательных расходов?"),
			secondAnswer = +prompt("Во сколько обойдется?");

		if (typeof(firstAnswer)==='string' && (typeof(firstAnswer) != null ) && (typeof(secondAnswer) != null ) 
		&& firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 25) {

		appData.optionalExpenses[firstAnswer] = secondAnswer;
	}
}
}
chooseOptExpenses();

console.log(appData.cash);
console.log(appData.timeData);
console.log(appData.expenses);

