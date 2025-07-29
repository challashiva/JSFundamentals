console.log("JS Fundamentals");
//Data types
//Concatination
let firstName= "Jhon";
let lastName="Mike";
let greetings ="Hello!";
let concatSting = firstName +" "+lastName;
greetings += " "+firstName;
//greetings =+ " "+firstName; //o/p 0
console.log(greetings);
console.log(concatSting);
console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.")

//Operator Precedence
//unary operators
// //Unary operators act on a single operand to perform operations like type conversion,
//  value manipulation, or checking certain conditions. 
// Let's look at some common unary operators and how they work.
const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number

let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true

// Represented by a tilde, ~, it inverts the binary representation of a number. Computers store numbers in binary format (1s and 0s). The ~ operator flips every bit, meaning it changes all 1s to 0s and all 0s to 1s. You will learn more about binary and bits in a future lecture video.

const num = 5; // The binary for 5 is 00000101

console.log(~num); // -6

//The void keyword is a unary operator that evaluates an expression and returns undefined.

const result = void (2 + 2);

console.log(result); // undefined
// void is also commonly used in hyperlinks to prevent navigation:

<a href="javascript:void(0);">Click Me</a>


//Bit wise operators
//AND Opreator

// The bitwise AND (&) operator returns a 1 in each bit position for which the corresponding bits of both operands are 1. Here's an example:

let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a & b);  // Output: 1 (Binary: 001)

// The bitwise OR (|) operator returns a 1 in each bit position for which the corresponding bits of either or both operands are 1. For example:

let a1 = 5;  // Binary: 101
let b1 = 3;  // Binary: 011
console.log(a1 | b1);  // Output: 7 (Binary: 111)

// The bitwise XOR (^) operator returns a 1 in each bit position for which the corresponding bits of either, but not both, operands are 1. For instance:

let a3 = 5;  // Binary: 101
let b3 = 3;  // Binary: 011
console.log(a3 ^ b3);  // Output: 6 (Binary: 110)

// The bitwise NOT (~) operator inverts all the bits of its operand. For example:

let a4 = 5;  // Binary: 101
console.log(~a4);  // Output: -6

//The left shift (<<) operator shifts all bits to the left by a specified number of positions. For example:

let a5 = 5;  // Binary: 101
console.log(a5 << 1);  // Output: 10 (Binary: 1010)

//The right shift (>>) operator shifts all bits to the right. For example:

let a6 = 5;  // Binary: 101
console.log(a6 >> 1);  // Output: 2 (Binary: 10)


//CONDITIONAL STATEMENTS

/* An if statement takes a condition and runs a block of code if that condition is truthy. Truthy values are any values that result in true when evaluated in a Boolean context like an if statement. Here are examples of truthy values:

non-empty strings, for example, hello

any number other than 0 and -0, for example, 4, -5, and others

arrays

objects

the boolean true

On the other hand, falsy values are values that evaluate to false in a boolean context. JavaScript has few falsy values, which makes them easy to remember. Here are a few falsy values:

boolean false

0 (zero)

"" (empty string)

null

undefined

NaN (Not a Number) */

if (null) {
  console.log("This will not run.");
}

if ("freeCodeCamp") {
  console.log("This will run.");
}

const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}

//The ternary operator
//SYNTAX : condition ? expressionIfTrue : expressionIfFalse;

const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);

