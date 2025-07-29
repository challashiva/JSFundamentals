/* The logical AND operator is represented by a double ampersand (&&). 
It checks if both operands are true and returns a result. 
If both operands are truthy, it returns the second value, that is, the one on the right:*/

const result = true && 'hello';

console.log(result); // hello
if (2 < 3 && 3 < 4) {
 console.log('The if block runs'); 
} else {
 console.log('The else block runs');
}

// The logical OR operator checks if at least one of the operands is truthy. 
// If the first operand is truthy, it returns that value:

const result1 = 'This is truthy' || false;

console.log(result1); // This is truthy

let userInput;

if (userInput || 'Guest') {
 console.log('A user is present');
} else {
 console.log('No user detected');
}

/* The nullish coalescing operator is more sophisticated than logical OR and logical AND.
 Represented by a double question mark (??), 
 it helps in scenarios where you want to return a value only if the first one is null or undefined. 
Here is an example of working with the nullish coalescing operator: */

const result3 = null ?? 'default';

console.log(result3); // default

const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light