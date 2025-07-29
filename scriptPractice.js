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
F