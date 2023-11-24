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



////////////////////////////////
// II. Loops
////////////////////////////////

// 2a. The basics

for (let i= 0; i <= 10; i++){
    console.log(i);
};

for (let i= 10; i <= 400; i++){
    console.log(i)
};

for (let i= 12; i <= 4000; i+= 3){
    console.log(i);
};


// 2B. Get Even

for (let i= 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(`${i} is an even number`);
    } else {
        console.log(i);
    }
}

// 2C. Give me 5

for (let i = 0; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log(`I found a ${i}. High Five `, ` I found a ${i}. Three is a crowd`);
    }
    else if (i % 5 === 0){
        console.log(`I found a ${i}. High Five`);
    } else if (i % 3 === 0){
        console.log(`I found a ${i}. Three is a crowd`);
    } else {
        console.log(i);
    }
}

// 2D. Savings Account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
 
// const deposit = 0
 let bank_account = 0

for (let deposit = 1; deposit <= 10; deposit++){
    bank_account = bank_account + deposit;
}

console.log(`Your account balance after ${10} deposits is $ ${bank_account}`);

let bonus = 0

for (let i = 0; i <= 100; i++){
     bonus += i * 2;

     
}
console.log(`With your bonus you now have ${bonus} in your account`); 


// === III. Arrays

//A. Talk about your group

// What are the things in an array called?
    console.log(`The things is an array are called elements.`);
// Do Arrays guarantee those things will be in order?
    console.log(`Yes, arrays have a guarantee order.`);
// What real-life thing could you model with an array?
    console.log(`A real-life thing you could model with an array is a roster for football that includes each players name, age, and position `);

    