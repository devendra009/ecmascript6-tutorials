// New function for assigning enumerable properties of one or more source objects onto a destination object.

var dest = { quux: 0 }
var src1 = { foo: 1, bar: 2 }
var src2 = { foo: 3, baz: 4 }
Object.assign(dest, src1, src2)
dest.quux === 0
dest.foo  === 3
dest.bar  === 2
dest.baz  === 4


// New function for finding an element in an array.
[ 1, 3, 4, 2 ].find(x => x > 3) // 4
[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2


// New string repeating functionality.
" ".repeat(4 * depth)
"foo".repeat(3)


// New specific string functions to search for a sub-string.
"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)   // true
"hello".includes("ell")       // true
"hello".includes("ell", 1)    // true
"hello".includes("ell", 2)    // false



// New functions for checking for non-numbers and finite numbers.
Number.isNaN(42) === false
Number.isNaN(NaN) === true

Number.isFinite(Infinity) === false
Number.isFinite(-Infinity) === false
Number.isFinite(NaN) === false
Number.isFinite(123) === true

// Checking whether an integer number is in the safe range, i.e., it is correctly represented by JavaScript (where all numbers, including integer numbers, are technically floating point number).
Number.isSafeInteger(42) === true
Number.isSafeInteger(9007199254740992) === false


// Availability of a standard Epsilon value for more precise comparison of floating point numbers.
console.log(0.1 + 0.2 === 0.3) // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) // true

// Truncate a floating point number to its integral part, completely dropping the fractional part.
console.log(Math.trunc(42.7)) // 42
console.log(Math.trunc( 0.1)) // 0
console.log(Math.trunc(-0.1)) // -0

// Determine the sign of a number, including special cases of signed zero and non-number.
console.log(Math.sign(7))   // 1
console.log(Math.sign(0))   // 0
console.log(Math.sign(-0))  // -0
console.log(Math.sign(-7))  // -1
console.log(Math.sign(NaN)) // NaN


