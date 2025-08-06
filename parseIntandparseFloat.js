/*JavaScript Interview Questions on parseInt() and parseFloat()
🔹 Basic Questions
1. What is the difference between parseInt() and parseFloat() in JavaScript?
Answer:

parseInt() parses a string and returns an integer.

parseFloat() parses a string and returns a floating-point number.

2. What will be the output of the following?
js
Copy
Edit*/
parseInt("123.456")
parseFloat("123.456")

parseInt("123.456") //➝ 123

parseFloat("123.456") //➝ 123.456

// 3. What does parseInt("010") return?
// Answer:
// In older JS engines, "010" might be treated as octal (base 8), but in modern JavaScript:

parseInt("010") //➝ 10

// To avoid ambiguity, always use a radix.

// 4. What does the second argument of parseInt() do?
// Answer:
// It defines the radix (base) used for parsing:

parseInt("10", 2) //➝ 2      // binary
parseInt("10", 16) //➝ 16    // hexadecimal
// 🔹 Intermediate Questions
// 5. What is the output of:

parseInt("123abc")
parseFloat("123abc")
// Answer:
// Both return 123. Parsing stops when a non-numeric character is found.

// 6. What is the output of parseInt("abc123") and parseFloat("abc123")?
// Answer:
// Both return NaN because the string doesn't start with a number.

// 7. What’s the difference between Number("123.45abc") and parseFloat("123.45abc")?
// Answer:

Number("123.45abc") //➝ NaN (strict conversion)

parseFloat("123.45abc") //➝ 123.45 (parses until invalid char)

// 8. Why is parseInt(1 / 0) returning Infinity, but parseInt("1/0") returns 1?
// Answer:

// 1 / 0 is evaluated to Infinity, then parsed ➝ still Infinity

// "1/0" as string ➝ parses only "1" before /

// 🔹 Advanced Questions
// 9. What will parseInt("0xF") return? Why?
// Answer:
// Returns 15 – it recognizes "0x" as hexadecimal by default.

// 10. Why is parseInt("08") or parseInt("09") problematic in older browsers?
// Answer:
// Older engines may interpret strings starting with 0 as octal, and since 8 and 9 aren't valid octal digits, the result may be incorrect or NaN.

// 11. What’s wrong with using parseInt() inside .map() like this:

["10", "20", "30"].map(parseInt)
// Answer:
// It gives unexpected results: [10, NaN, NaN]
// Because map passes 3 arguments: value, index, array. So it's equivalent to:

parseInt("10", 0) //➝ 10
parseInt("20", 1)// ➝ NaN (base 1 is invalid)
parseInt("30", 2) //➝ NaN (3 is not a valid digit in base 2)

["10", "20", "30"].map(str => parseInt(str))
// 12. How can you check if a string is a valid float in JavaScript?
// Answer:

function isFloat(str) {
  return !isNaN(str) && str.toString().indexOf('.') !== -1;
}


// The second argument in parseInt() is called the radix — it defines the base (number system) in which the string should be interpreted.


// parseInt(string, radix)
// 🔹 What is a radix?
// A radix is the base of the numeral system.

// Common radix values:

// Radix	Base System	        Example	            Output
// 2	    Binary	            parseInt("1010", 2)	10
// 8	    Octal	            parseInt("10", 8)	8
// 10	    Decimal (default)	parseInt("10", 10)	10
// 16	    Hexadecimal	        parseInt("F", 16)	15

parseInt("100", 2);   // → 4 (binary 100)
parseInt("20", 8);    // → 16 (octal 20)
parseInt("15", 10);   // → 15 (decimal 15)
parseInt("1A", 16);   // → 26 (hexadecimal 1A)
// 🔹 Why is it important?
// If you don't specify the radix, JavaScript tries to guess:

// Strings starting with 0x → Hex (16)

// Strings starting with 0 (in old browsers) → Octal (8)

// Otherwise → Decimal (10)

// This can cause unexpected behavior, so always specify the radix explicitly for safe parsing.


// ✅ Always use the second argument to avoid ambiguity:

parseInt("08", 10);  // Correct
parseInt("010", 10); // Correct

// visual chart of radix values for parseInt() in JavaScript:

// ✅ Radix (Base) Chart for parseInt()
// Radix	Base Name	        Digits Used	            Example Input	    parseInt(input, radix) Output
// 2	    Binary	            0–1	                    parseInt("1010", 2)	10
// 8	    Octal	            0–7	                    parseInt("20", 8)	16
// 10	    Decimal (Default)	0–9	                    parseInt("15", 10)	15
// 16	    Hexadecimal	        0–9, A–F or a–f	        parseInt("1F", 16)	31
// 3–36	Other numeral bases	Varies (up to Z for 36)	parseInt("Z", 36)	35

// 🔹 Special Notes:
// Radix must be an integer between 2 and 36.

// Digits beyond the radix base are ignored.

parseInt("19", 8) // 1 → '9' is not valid in base 8, so it's ignored

["10", "11", "12"].map(parseInt);
// Output: [10, NaN, 1] ❌ Unexpected!
// 💡 Fix:

["10", "11", "12"].map(n => parseInt(n, 10));
// Output: [10, 11, 12] ✅
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 4));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)
console.log(parseInt("ff", 16));
// 255 (lower-case hexadecimal)
console.log(parseInt("0xFF", 16));
// 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

