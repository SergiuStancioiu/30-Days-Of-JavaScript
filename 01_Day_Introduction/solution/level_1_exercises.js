// 1. Write a single line comment which says, _comments can make code readable_
// comments can make code readable

// 2. Write another single comment which says, _Welcome to 30DaysOfJavaScript_
// Welcome to 30DaysOfJavaScript

// 3. Write a multiline comment which says, _comments can make code readable, easy to reuse_ _and informative_
/*
   comments can make code readable, easy to reuse
   and informative
*/

// 4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
// I'm going to ignore the variable.js file and just declare the variables here
const name = "Florian";
const isMale = true;
const hasPrivateJet = undefined;

// 5. Create datatypes.js file and use the JavaScript **_typeof_** operator to check different data types. Check the data type of each variable
// I'm ignoring the datatypes.js file
const nameType = typeof name;
const isMaleType = typeof isMale;
const hasPrivateJetType = typeof hasPrivateJet;

// 6. Declare four variables without assigning values
let uninitializedVariable;
let tommorow;
let stuff;
let evenMoreStuff;

// 7. Declare four variables with assigned values
let initializedVariable = 1;
let today = "Sunday";
let stuff2 = "Easy Peasy Lemon Squeazy";
let evenMoreStuff2 = "Lorem ipsum dolor sit amet";

// 8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
const firstName = "Florian";
const lastName = "Stancioiu";
let maritalStatus = "single";
const country = "Romania";
let age = 31;

// 9. Declare variables to store your first name, last name, marital status, country and age in a single line
const firstName2 = "Florian",
  lastName2 = "Stancioiu",
  country2 = "Romania";
let maritalStatus2 = "single",
  age2 = 31;

// 10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.
let myAge = 31;
let yourAge = 28;

console.log(myAge, yourAge);
