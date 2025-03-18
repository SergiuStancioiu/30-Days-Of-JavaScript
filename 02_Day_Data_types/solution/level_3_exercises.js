//### Exercises: Level 3
// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.
const sentence =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const mySentenceArr = sentence.toLowerCase().split(/\W+/);
const nrLove = mySentenceArr.reduce((accumulator, word) => {
  if (word === 'love') {
    return ++accumulator;
  }
  return accumulator;
}, 0);

// 2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
const sentence2 =
  'You cannot end a sentence with because because because is a conjunction';
const sentence2Arr = sentence2.split(' ');
const becauseArr = [];

sentence2Arr.map((word) => {
  if (word.match('because')) {
    becauseArr.push(word);
  }
});

becauseArr.length;

/*
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```
*/
const sentence3 =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let sentWSC = sentence3.replace(/[^\w\s]/gi, '');

function commonWord() {
  if (sentWSC.length === 0) {
    return null;
  }

  sentWSC = sentWSC.toLowerCase();
  let commonWordCount = 0;
  let commonWord = [];
  sentWSC = sentWSC.split(' ');
  sentWSC.forEach((word) => {
    let wordValue = sentWSC.filter((w) => w === word).length;

    if (wordValue > commonWordCount) {
      commonWordCount = wordValue;
      commonWord.length = 0;
      commonWord.push(word);
    } else if (wordValue == commonWordCount) {
      commonWord.push(word);
    }
  });

  console.log(commonWord);
}

commonWord();

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const sentence4 =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = sentence4.match(/\d+/g).map(Number);
const monthlySalary = numbers[0] * 12;
const annualBonus = numbers[1];
const monthlyCourses = numbers[2] * 12;
const totalAnnualIncome = monthlySalary + annualBonus + monthlyCourses; // 250000
