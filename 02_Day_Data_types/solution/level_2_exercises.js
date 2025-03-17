//### Exercise: Level 2
/*
1. Using console.log() print out the following statement:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ``` 
*/
console.log(
  'There is no exercise better for the heart than reaching down and lifting people up.'
);

/* 
2. Using console.log() print out the following quote by Mother Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```
*/
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
typeof '10' === 10; // false
typeof 10 === typeof 10; // true

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
parseFloat('9.8') === 10; // false
parseFloat(10) === 10; // true

// 5. Check if 'on' is found in both python and jargon
'python'.includes('on'); // true
'jargon'.includes('on'); //true

// 6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
'I hope this course is not full of jargon'.includes('jargon'); //true

// 7. Generate a random number between 0 and 100 inclusively.
parseInt(Math.random() * 100);

// 8. Generate a random number between 50 and 100 inclusively.
parseInt(Math.random() * (100 - 50)) + 50;

// 9. Generate a random number between 0 and 255 inclusively.
parseInt(Math.random() * 255);

// 10. Access the  string characters using a random number.
parseInt(Math.random() * 'JavaScript'.length);

/*
11. Use console.log() and escape characters to print the following pattern.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```
*/
console.log('1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

//12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
//Note I will use
console.log(
  'You cannot end a sentence with because because because is a conjunction'.substr(
    31,
    23
  )
);
