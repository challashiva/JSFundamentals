console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == 0);  // false
console.log(null == ''); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false

/* These comparisons return false because null and undefined are only equal to each other
 (and themselves) when using the equality operator.
 The behavior of null in other comparisons is particularly tricky: */

 console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* undefined, on the other hand, always converts to NaN in numeric contexts,
 which makes all numeric comparisons with undefined return false: */

 console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false

/* In summary, while null and undefined are both used to represent the absence of a value,
 they behave differently in comparisons. Understanding these differences
  is key to writing clear and error-free JavaScript code.
 */

  /* 
Optional Chaining (?.): Introduced in ES2020, this operator allows safe access to properties 
of an object that might be null or undefined.
 If the preceding element is null or undefined, it short-circuits and returns undefined.  */

 const user = { name: "Alice" };
const city = user?.address?.city; // city will be undefined if address is null or undefined

/* Nullish Coalescing Operator (??): Also introduced in ES2020,
 this operator provides a default value for null or undefined values. */
let myVariable;
 const value = myVariable ?? "default value"; // If myVariable is null or undefined, value will be "default value"

 /* Typeof Operator: Can be used to check the type of undefined, which returns the string "undefined".
  However, typeof null returns "object", which is a known quirk in JavaScript. */

//   Q3: How do you check if a variable is both null or undefined?

if (value == null) {
  // covers both null and undefined
}

//SWITCH Case
let expression=3;
switch (expression) {
  case 1:// value1:
    // code to be executed if expression === value1
    break;
  case 2:// value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any case
}

let dayOfWeek = 3; 

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}

let creditScore = 720; 
let annualIncome = 60000; 
let loanAmount = 200000; 

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
    eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
    eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
    eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
    eligibilityStatus = "Not eligible due to low credit score.";
} else {
    eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);