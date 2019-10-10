/*console.log('Hello World!!!');

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

// Type coercion

console.log(firstName + ' ' + age);

// Variable Mutation -> To change the value of a variable

age = 'Twenty Eight';

console.log(age);


var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


//Basic Operators
/*
var totalMarks, obtainedMarks;

totalMarks = 125;
obtainedMarks = 65;
console.log('Percentage is : '+ ((obtainedMarks/totalMarks)*100));
*/



//Logical Operators
/*
var age1, age2;
age1 = 21;
age2 = 31;

var older = age1 > age2;
console.log(older);


// typeof operator

console.log(typeof older); // variable ki data type bta deta ha
*/



//Coding Challenge 1 -> Calculating BMI
/*

var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI;
markMass = 78; //in Kg
markHeight = 1.69; //in meters

johnMass = 92;
johnHeight = 1.95;

//Calculating BMI
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

var higherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log("Is Mark's BMI higher than John's? " + higherBMI);
*/

//************************************''
//If else statements
/*
var name, age, isMarried;
name = 'Waqas';
age = 21;
isMarried = 'no';

if(isMarried === 'yes')
{
	console.log(name + ' is married!');
}
else
{
	console.log(name + ' is not married');
}
*/

// Type coercion -> it converts 23 as a string and then compares it with the other 23.
/*
if (23 == "23")
{
	console.log('laalalalalalalalalla');
}
*/

// Coding Challenge 2 
/*
var ageJohn, ageAdam, ageWaqas, heightJohn, heightAdam, heightWaqas, totalScoreJohn, totalScoreAdam, totalScoreWaqas;

ageJohn = 22;
ageAdam = 22;
ageWaqas = 22

heightJohn = 172;
heightAdam = 172;
heightWaqas = 172;

totalScoreJohn = heightJohn + (ageJohn * 5);
totalScoreAdam = heightAdam + (ageAdam * 5);
totalScoreWaqas = heightWaqas + (ageWaqas * 5);

if (totalScoreJohn > totalScoreAdam && totalScoreJohn > totalScoreWaqas) 
{
	console.log('John wins with ' + totalScoreJohn + ' scores');
}
else if (totalScoreAdam > totalScoreJohn && totalScoreAdam > totalScoreWaqas) 
{
	console.log('Adam wins with ' + totalScoreAdam + ' scores');
}
else if (totalScoreWaqas > totalScoreJohn && totalScoreWaqas > totalScoreAdam) 
{
	console.log('Waqas wins with ' + totalScoreWaqas + ' scores');
}
else if (totalScoreWaqas === totalScoreAdam && totalScoreAdam === totalScoreJohn) 
{
	console.log('Adam, Waqas and John have same score ' + totalScoreAdam +', so the the match is drawn');
}
*/

//****************************************************************'
/*
function calculateAge (yearOfBirth, currentYear)
{
	var age = currentYear - yearOfBirth;
	return age;
}

console.log(calculateAge(1996, 2019));
*/

//*********************************************************
//Ternary Operator
/*
var age = 19
var isTeen = age <= 18 ? 'True' : 'False';
console.log(isTeen); 
*/

//************************************************************** */
//Truthy and falsy values and equality operators
//Falsy values are: undefined, null, 0, '', NaN
//Truthy values are: NOT 

//******************************************************'
//Arrays
//there are two ways of declaring arrays:
/*
var names = ['Waqas', 'Bilal', 'Ali'];
var years = new Array(1996, 1995, 1990);

console.log(names[0]);
*/
//we can have boolean, integer, strings in a same arrays

//Coding Challenge 2
/*
var teamJohn, teamMike, teamMary, avgTeamJohn, avgTeamMike, avgTeamMary;
teamJohn = [999, 120, 103];
teamMike = [116, 94, 123];
teamMary = [199, 134, 199];

avgTeamJohn = (teamJohn[0] + teamJohn[1] + teamJohn[2]) / 3;
avgTeamMike = (teamMike[0] + teamMike[1] + teamMike[2]) / 3;
avgTeamMary = (teamMary[0] + teamMary[1] + teamMary[2]) / 3;

if (avgTeamJohn > avgTeamMike && avgTeamJohn > avgTeamMary) {
	console.log("John's team win! His average points are: " + avgTeamJohn);
} else if (avgTeamMike > avgTeamJohn && avgTeamMike > avgTeamMary) {
	console.log("Mike's team win!");
} else if (avgTeamMary > avgTeamJohn && avgTeamMary > avgTeamMike) {
	console.log("Mary's team win!");
} else {
	console.log("Both John and Mike have same score, so, it is a draw !");
}*/

//Objects (Key value pairs)

//object literals
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
}
console.log(john);

john.lastName = 'Miller';
john['job'] = 'Programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Alpha';
jane['yearOfBirth'] = 1992;
jane.job = 'Cricketer';
jane.isMarried = true;

console.log(jane);

console.log(jane.job);

if (jane.yearOfBirth != 1990) {
	console.log("Howdy Pardner!");
} 20*/



/*********************************************Coding Challenge */
/*
function printFullAge(someArray) {
	var anotherEmptyArray = [];
	var fullAgeReturn = [];
	for (var i = 0; i < someArray.length; i++) {
		anotherEmptyArray[i] = someArray[i];
		if ((2019 - anotherEmptyArray[i]) >= 18) {
			fullAgeReturn[i] = true;
			//console.log(fullAgeReturn[i]);

		} else {
			fullAgeReturn[i] = false;

		}
	}
	return fullAgeReturn;
}
var birthYearOfPersons;
birthYearOfPersons = [1990, 1982, 1987, 1996, 1993, 2001, 1999, 2005, 2003];
birthYearOfPersons2 = [2007, 1992, 2001, 1996, 2002, 1999, 2009, 2005, 2003];
var emptyArray = [];
//console.log(birthYearOfPersons);
for (var i = 0; i < birthYearOfPersons.length; i++) {
	emptyArray[i] = birthYearOfPersons[i];
}
for (var i = 0; i < emptyArray.length; i++) {
	if ((2019 - emptyArray[i]) >= 18) {
		console.log('Full age' + emptyArray[i]);
	}
}
var full_1 = [];
var full_2 = [];
full_1 = printFullAge(birthYearOfPersons);
full_2 = printFullAge(birthYearOfPersons2);
console.log(full_1);
console.log(full_2);
*/


/*
function tipCalculator(bills) {
	var tip = [];
	console.log(bills);

	for (var i = 0; i < bills.length; i++) {

		if (bills[i] < 50) {
			tip[i] = bills[i] * 0.2;
			//totalBill[i] = this.bills[i] + this.tip[i];
		} else if (bills[i] >= 50 && bills[i] <= 200) {
			tip[i] = bills[i] * 0.15;
			//totalBill[i] = this.bills[i] + this.tip[i];
		} else {
			tip[i] = bills[i] * 0.1;
			//totalBill[i] = this.bills[i] + this.tip[i];
		}
	}
	return tip
	//console.log(tip);
	//console.log(totalBill);
}

var bills = [124, 48, 268];
var tips = [];
tips = tipCalculator(bills);
var totalBill = [];
for (var i = 0; i < bills.length; i++) {
	totalBill[i] = bills[i] + tips[i];
}
console.log(tips);
console.log(totalBill);
*/
//JavaScript Versions  *******


//Objects and properties - there are two ways (We van also use arrays inside objects):
/*
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Alpha';
jane['yearOfBirth'] = 1992;
jane.job = 'Cricketer';
jane.isMarried = true;

console.log(jane);

console.log(jane.job);

var john = {
	name: 'John',
	birthYear: 1992,
	job: 'teacher',
	cast: ['Malik', 'Rajpoot', 'abd']
};
console.log(john);
console.log(john.job);
console.log(john['birthYear']);
*/

/************************************** */
//Objects and Methods' (method inside objects)
/*
var john = {
	name: 'John',
	birthYear: 1992,
	job: 'teacher',
	cast: ['Malik', 'Rajpoot', 'abd'],
	calcAge: function () {
		return 2019 - this.birthYear;
	}
};
console.log(john.calcAge());
*/
//Coding challenge 4
/*
var mark = {
	fullName: 'Mark Alpha',
	mass: 75, //In kg
	height: 1.2, //In Meter
	calcBMI: function () {
		return this.markBMI = (this.mass / (this.height * 2));
	}
}
var john = {
	fullName: 'John Alpha',
	mass: 752, //In kg
	height: 1.2, //In Meter
	calcBMI: function () {
		return this.johnBMI = (this.mass / (this.height * 2));
	}
}


console.log(mark.calcBMI());

console.log(john.calcBMI());

if (mark.markBMI > john.johnBMI) {
	console.log(mark.fullName + ' has greater BMI, which is: ' + mark.markBMI);
} else if (john.johnBMI > mark.markBMI) {

	console.log(john.fullName + ' has greater BMI, which is: ' + john.johnBMI);
} else {
	console.log('Both ' + mark.fullName + ' and ' + john.fullName + ' have same BMI which is : ' + mark.markBMI);
}
*/
/**** Coding Challenge 3 - Covers all topics in basics */


/*
var johnFamily = {
	name: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	tips: [],
	totalBill: [],
	calcTip: function () {
		for (var i = 0; i < this.bills.length; i++) {
			if (this.bills[i] < 50) {
				this.tips[i] = (this.bills[i] * 0.20);
				this.totalBill[i] = (this.bills[i] + this.tips[i]);
			} else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
				this.tips[i] = (this.bills[i] * 0.15);
				this.totalBill[i] = (this.bills[i] + this.tips[i]);
			} else {
				this.tips[i] = (this.bills[i] * 0.10);
				this.totalBill[i] = (this.bills[i] + this.tips[i]);
			}
		}
	},
	avgTip: 0,
	calcAvg: function () {

		for (var i = 0; i < this.tips.length; i++) {
			this.avgTip += this.tips[i];
		}
		this.avgTip = this.avgTip / this.tips.length;
	}
}

var markFamily = {
	name: 'Mark Anthony',
	bills: [77, 375, 110, 45],
	tips: [],
	totalBill: [],
	calcTip: function () {
		for (var i = 0; i < this.bills.length; i++) {
			if (this.bills[i] < 100) {
				this.tips[i] = (this.bills[i] * 0.20);
				this.totalBill[i] = (this.bills[i] + this.tips[i]);
			} else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
				this.tips[i] = (this.bills[i] * 0.10);
				this.totalBill[i] = (this.bills[i] + this.tips[i]);
			} else {
				this.tips[i] = (this.bills[i] * 0.25);
				this.totalBill[i] = (this.bills[i] + this.tips[i]);
			}
		}
	},
	avgTip: 0,
	calcAvg: function () {

		for (var i = 0; i < this.tips.length; i++) {
			this.avgTip += this.tips[i];
		}
		this.avgTip = this.avgTip / this.tips.length;
	}

}

function calcAvg(objectName) {

	for (var i = 0; i < objectName.length; i++) {
		objectName.avgTip += objectName.tips[i];
	}
	objectName.avgTip = objectName.avgTip / objectName.tips.length;
}

johnFamily.calcTip();
markFamily.calcTip();

johnFamily.calcAvg();
markFamily.calcAvg();




console.log(johnFamily.bills);
console.log(johnFamily.tips);
console.log(johnFamily.totalBill);
console.log(johnFamily.avgTip);


console.log(markFamily.bills);
console.log(markFamily.tips);
console.log(markFamily.totalBill);
console.log(markFamily.avgTip);

if (johnFamily.avgTip > markFamily.avgTip) {
	console.log('Family of John paid highest tip which is: ' + johnFamily.avgTip);
} else {
	console.log('Family of Mark paid highest tip which is: ' + markFamily.avgTip);
}
*/