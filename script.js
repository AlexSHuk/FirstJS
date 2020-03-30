'use strict';
var money = +prompt("Ваш бюджет на месяц?") ;
let time = prompt("Введите дату в формате YYYY-MM-DD" , "YYYY-MM-DD");


var appData = {
cash : money,
timeData : time,
expenses : {},
optionalExpenses : {},
income : [],
savings: false
};

// цикл FOR

// for (let i=0; i<2; i++) {
// 	let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце"),
// 	secondAnswer = +prompt( "Во сколько обойдется?");

// 	if (typeof(firstAnswer)==='string' && (typeof(firstAnswer) != null ) && (typeof(secondAnswer) != null ) 
// 		&& firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 25) {

// 		appData.expenses[firstAnswer] = secondAnswer;
// 	} else i-- ;

// }

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
let i=0;
do {
	let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце"),
	secondAnswer = +prompt( "Во сколько обойдется?");

	if (typeof(firstAnswer)==='string' && (typeof(firstAnswer) != null ) && (typeof(secondAnswer) != null ) 
		&& firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 25) {

		appData.expenses[firstAnswer] = secondAnswer;
	i++;
	} 
}

while (i<2);


let budget = money/30;
alert("Ваш бюджет на 1 день составляет " + budget + " грн");

console.log(appData.cash);
console.log(appData.timeData);
console.log(appData.expenses);

