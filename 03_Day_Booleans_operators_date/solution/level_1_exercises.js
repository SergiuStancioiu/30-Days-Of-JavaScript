// ## 💻 Day 3: Exercises

// ### Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Jon';
const lastName = 'Doe';
const country = 'France';
const city = 'Paris';
const age = 30;
const isMarried = false;
const year = 2025;

typeof firstName; // string
typeof lastName; // string
typeof country; // string
typeof city; // string
typeof age; // number
typeof isMarried; // boolean
typeof year; // number

// 2. Check if type of '10' is equal to 10
typeof '10' === 10; // false

// 3. Check if parseInt('9.8') is equal to 10
parseInt('9.8') === 10; // false

// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
typeof 10 === typeof 10; // true

//    2. Write three JavaScript statement which provide falsy value.
typeof '10' === typeof 10; // false

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//    1. 4 > 3 // true
//    2. 4 >= 3 // true
//    3. 4 < 3 // false
//    4. 4 <= 3 // false
//    5. 4 == 4 // true
//    6. 4 === 4 // true
//    7. 4 != 4 // false
//    8. 4 !== 4 // false
//    9. 4 != '4' // false
//    10. 4 == '4' // true
//    11. 4 === '4' // false
//    12. Find the length of python and jargon and make a falsy comparison statement.
console.log(
  '5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()'
);
console.log('1. 4 > 3', 4 > 3);
console.log('2. 4 >= 3', 4 >= 3);
console.log('3. 4 < 3', 4 < 3);
console.log('4. 4 <= 3', 4 <= 3);
console.log('5. 4 == 4', 4 == 4);
console.log('6. 4 === 4', 4 === 4);
console.log('7. 4 != 4', 4 != 4);
console.log('8. 4 !== 4', 4 !== 4);
console.log("9. 4 != '4'", 4 != '4');
console.log("10. 4 == '4'", 4 == '4');
console.log("11. 4 === '4'", 4 === '4');

'python'.length; // 6
'jargon'.length; // 6

typeof 'python' == typeof 'jargon.length'; // true
typeof 'python' !== typeof 'jargon.length'; // false

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    1. 4 > 3 && 10 < 12 // true
//    2. 4 > 3 && 10 > 12 // false
//    3. 4 > 3 || 10 < 12 // true
//    4. 4 > 3 || 10 > 12 // true
//    5. !(4 > 3) // false
//    6. !(4 < 3) // true
//    7. !(false) // true
//    8. !(4 > 3 && 10 < 12) // false
//    9. !(4 > 3 && 10 > 12) // true
//    10. !(4 === '4') // true
//    11. There is no 'on' in both dragon and python
const dragon = 'dragon';
const python = 'python';
dragon.includes('on'); // true
python.includes('on'); // true
console.log(
  '6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()'
);

console.log('2. 4 > 3 && 10 > 12', 4 > 3 && 10 > 12);
console.log('3. 4 > 3 || 10 < 12', 4 > 3 || 10 < 12);
console.log('4. 4 > 3 || 10 > 12', 4 > 3 || 10 > 12);
console.log('5. !(4 > 3)', !(4 > 3));
console.log('6. !(4 < 3)', !(4 < 3));
console.log('7. !(false)', !false);
console.log('8. !(4 > 3 && 10 < 12)', !(4 > 3 && 10 < 12));
console.log('9. !(4 > 3 && 10 > 12)', !(4 > 3 && 10 > 12));
console.log("10. !(4 === '4')", !(4 === '4'));
console.log(
  "11. 'on' in dragon",
  dragon.includes('on'),
  "'on' in python",
  python.includes('on')
);

// 7. Use the Date object to do the following activities
const date = new Date();
//    1. What is the year today?
const yearToday = date.getFullYear();

//    2. What is the month today as a number?
const monthNumber = date.getMonth() + 1;

//    3. What is the date today?
const dateToday = `${date.getDay()}.${
  date.getMonth() + 1
}.${date.getFullYear()}`;

//    4. What is the day today as a number?
const dayAsNumber = date.getDay();

//    5. What is the hours now?
const hourNow = date.getHours();

//    6. What is the minutes now?
const minutesNow = `${date.getMinutes()} minutes`;

//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const nrSecElapsed = `${date.getTime()} numbers of seconds elapsed from January 1, 1970 to now`;
