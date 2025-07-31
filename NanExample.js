let result = 0 / 0;
console.log(result); // Output: NaN
console.log(NaN === NaN); // Output: false

console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(isNaN("37"));      // false: "37" is converted to 37
console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
console.log(isNaN(""));        // false: empty string is converted to 0
console.log(isNaN(" "));       // false: string with a space is converted to 0

console.log(isNaN("blabla"));  // true: "blabla" is not a number

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN({}));         // false
console.log(Number.isNaN("blabla"));   // false

function divide(a, b) {
  let result = a / b;
  if (Number.isNaN(result)) {
    return "Error: Division resulted in NaN";
  }
  return result;
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // Infinity
console.log(divide(0, 0));   // "Error: Division resulted in NaN"
I