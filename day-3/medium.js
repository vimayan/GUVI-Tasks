




/*medium programs*/
//simple programs todo variables

//Declare four variables without assigning values and print them in console
var unasigned;
console.log(unasigned);

//How to get value of the variable myvar as output
var myvar = 1;
console.log(myvar);

//Declare variables to store your first name, last name, marital status, country and age in multiple lines

var name;
var last_name;
var ismarried;
var country;
var age;

//Declare variables to store your first name, last name, marital status, country and age in sinle lines

var name2, last_name2, ismarried2, country2, age2;

// Declare variables and assign string, boolean, undefined and null data types

var string, bol, myvar2, mynull;
string = "hello world";
bol = true;
myvar2;
mynull = null;
console.log(mynull);

//Convert the string to integer

let number = "5";
console.log(parseInt(number), Number(number), +number);

//7. Write 6 statement which provide truthy & falsey values.
let truthyValue = "Hello, World!";
if (truthyValue) {
  console.log("Truthy statement: The value is truthy.");
} else {
  console.log("Truthy statement: The value is falsey.");
}

let falseyValue = 0;
if (falseyValue) {
  console.log("Falsey statement: The value is truthy.");
} else {
  console.log("Falsey statement: The value is falsey.");
}

let truthyArray = [1, 2, 3];
if (truthyArray.length) {
  console.log("Truthy statement: The array has elements, so it is truthy.");
} else {
  console.log("Truthy statement: The array is falsey.");
}

let falseyString = "";
if (falseyString) {
  console.log("Falsey statement: The string is truthy.");
} else {
  console.log("Falsey statement: The string is falsey.");
}

let truthyObject = { key: "value" };
if (truthyObject.key) {
  console.log("Truthy statement: The object property exists, so it is truthy.");
} else {
  console.log("Truthy statement: The object is falsey.");
}

let falseyUndefined;
if (falseyUndefined) {
  console.log("Falsey statement: The variable is truthy.");
} else {
  console.log("Falsey statement: The variable is falsey.");
}

/**simle programs todo operator */

// Square of a number
let x1 = 5;
let square = x1 * x1;
console.log(square);

//Swapping 2 numbers

let a = 5;
let b = "string";

function swapValue(value1, value2) {
  let temp;
  temp = value1;
  a = value2;
  b = value1;
}
swapValue(a, b);

console.log(a, b);
//Addition of 3 numbers
let add = 5 + 4 + 6;

//celsius to Fahrenheit conversion
function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// meters to miles
function metersToMiles(meters) {
  var miles = meters * 0.000621371;
  return miles;
}

// pound to kg

function poundsToKilograms(pounds) {
  var kilograms = pounds * 0.453592;
  return kilograms;
}

//calculate batting average

function calculateBattingAverage(totalRuns, totalmatch) {
  if (totalmatch === 0) {
    return "Batting average is not applicable (no totalmatch).";
  } else {
    var battingAverage = totalRuns / totalmatch;
    return battingAverage.toFixed(2); // Display average up to 2 decimal places
  }
}

//print average test score

function calculateAverage(testScores) {
  var total = 0;

  // Summing up the test scores
  for (var i = 0; i < testScores.length; i++) {
    total += testScores[i];
  }

  // Calculating the average
  var average = total / testScores.length;
  return average.toFixed(2); // Display average up to 2 decimal places
}

// Power of any number x ^ y.
Math.pow(5, 2);

//calculate simple intrest

function calculateSimpleInterest(principal, intrest_rate, year) {
  var interest = (principal * intrest_rate * year) / 100;
  return interest.toFixed(2); // Display interest up to 2 decimal places
}

// Calculate area of an equilateral triangle
function calculateEquilateralTriangleArea(side) {
  var area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
  return area.toFixed(2); // Display area up to 2 decimal places
}

//Area Of Isosceles Triangle
function calculateIsoscelesTriangleArea(base, equalSide) {
  var area =
    (1 / 4) *
    Math.sqrt(4 * Math.pow(equalSide, 2) - Math.pow(base, 2)) *
    Math.pow(base, 2);
  return area.toFixed(2); // Display area up to 2 decimal places
}

//  volume of a sphere
function calculateSphereVolume(radius) {
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  return volume.toFixed(2); // Display volume up to 2 decimal places
}

//calculate Prism Volume
function calculatePrismVolume(length, width, height) {
  var volume = length * width * height;
  return volume.toFixed(2); // Display volume up to 2 decimal places
}

//area of traiangle

function calculateTriangleArea(base, height) {
  var area = 0.5 * base * height;
  return area.toFixed(2); // Display area up to 2 decimal places
}

//Given their radius of a circle and find its diameter, circumference and area.

function circle(radius) {
  let diameter = 2 * radius;
  let Circumference = 2 * Math.PI * radius;
  let area = Math.PI * Math.pow(radius, 2);
  return {
    diameter,
    Circumference,
    area,
  };
}

function performArithmeticOperations(num1, num2) {
  var sum = num1 + num2;
  var difference = num1 - num2;
  var multiply = num1 * num2;

  // Checking for division by zero
  var quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

  // Checking for modulo by zero
  var remainder =
    num2 !== 0
      ? num1 % num2
      : "Cannot calculate remainder for division by zero";

  return {
    sum: sum,
    difference: difference,
    multiply: multiply,
    quotient: quotient,
    remainder: remainder,
  };
}

//patern

function printAsteriskPattern() {
  var pattern = "*****\n";
  var result = pattern.repeat(5);
  console.log(result);
}

printAsteriskPattern();

//  calculate electricity bill

function calculateElectricityBill(wattsPerHour, perUnitRate) {
  // Calculate total energy consumed in kilowatt-hours (kWh)
  let totalEnergyConsumed = (wattsPerHour * 24 * 30) / 1000;

  // Calculate electricity bill
  let electricityBill = totalEnergyConsumed * perUnitRate;
  return electricityBill.toFixed(2); // Display bill up to 2 decimal places
}

/**simple programs to loop */

//write a loop that makes seven calls

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

//Iterate through the string array and print it contents

var strArray = [
  "<option>Jazz</option>",
  ,
  "<option>Blues</option>",
  ,
  "<option>New Age</option>",
  ,
  "<option>Classical</option>",
  ,
  "<option>Opera</option>",
];

strArray.map((str) => console.log(str));

//write a code to count the elements in the array . Don’t use length property

var myarray = [11, 22, 33, 44, 55];

var count = 0;

for (var i in myarray) {
  count++;
}
console.log(count);
// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "Mari") {
      input[i] = "Munnabai";
      return;
    }
  }
}

dataHandling(friends);

//Find the person is ur friend or not.

function dataHandling(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === name) {
      return "yes";
    }
  }
  return "no";
}

let found = dataHandling(friends, "Jeff");

console.log(found);

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];

let combined_array = friends1.concat(friends2).sort();

console.log(combined_array);

// Get the first, middle, and last items
var firstItem = combined_array[0];
var middleItem = combined_array[Math.floor(combined_array.length / 2)];
var lastItem = combined_array[combined_array.length - 1];

// Add Mr or Ms to the names in the friends array.
let newArray = friends.map((ele) => "Mr " + ele);
console.log(newArray);

//Concat all the names the friends array and return as comma “,” seperated string.

let concat_friends = friends.join(",");

// Find the names and return the list starting with letter M.

let friends_M = friends.filter((el) => el[0] === "M");

// Find the name with max characters and return the name.

let friends_max = friends.reduce(function (a, b) {
  return a.length >= b.length ? a : b;
});

// Find the name with min characters and return the name

let friends_min = friends.reduce(function (a, b) {
  return a.length <= b.length ? a : b;
});

// Find the average in the array below.
// Make sure you add only the numbers and do avg.

const friendsInfo = [
  6,
  12,
  "Mari",
  1,
  true,
  "Munnabai",
  "200",
  "CaptianAmerica",
  8,
  10,
];

const numbersOnly = friendsInfo.filter((item) => !isNaN(+item));

console.log(!isNaN(+8));
const sum = numbersOnly.reduce((acc, num) => acc + Number(num), 0);

const average = sum / numbersOnly.length;

console.log("Average of the numbers:", average);

// Add a new key value pair to myobject
// key : ten
// value : ten

let myobject = { 1: "one", 11: 1, name: "arun" };

myobject.ten = "ten";
console.log(myobject);
