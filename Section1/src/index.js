////////////////////////////////
// 1. Variable and Data Types
////////////////////////////////

// 1A. Variables

const myName = 'Erisha';
let favoriteLanguage = 'Python';
let newFavoriteLanguage = 'Javascript';

favoriteLanguage = newFavoriteLanguage; 

console.log(`Hello my name is ${myName}. My favorite language is ${favoriteLanguage}.`);



// 1B. Strings

let firstVariable = "Hello World";

firstVariable = 777;
secondVariable = firstVariable;
secondVariable = 'Hey guys!';
console.log(firstVariable); // 777

const yourName = 'Erisha';
console.log(`Hello, my name is ${yourName}`);


// 1C. Booleans

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)

console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"

console.log(48 == '48');


// 1D. The Farm

let animal = 'cow';
let animalSound = 'moooooo'

if (animal === 'cow'){
    console.log(animalSound);
} else {
    console.log("Hey! You're not a cow !");
};



// 1E. Driver's Ed

let age = 21;

if (age > 16){
    console.log("Here are the keys!");
} else {
    console.log("Sorry, You're not old enough");
}