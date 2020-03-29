'use strict';
var money = +prompt("Ваш бюджет на месяц?") ;
var time = prompt("Введите дату в формате YYYY-MM-DD" , "YYYY-MM-DD");
var firstAnswer = prompt("Введите обязательную статью расходов в этом месяце");
var secondAnswer = +prompt( "Во сколько обойдется?");

var appData = {
cash : money,
timeData : time,
expenses : {},
optionalExpenses : {},
income : [],
savings: false
};

appData.expenses[firstAnswer] = secondAnswer;

var budget = (money - secondAnswer)/30;
alert("Ваш бюджет на 1 день составляет " + budget + " грн");

console.log(appData.cash);
console.log(appData.timeData);
console.log(appData.expenses);

