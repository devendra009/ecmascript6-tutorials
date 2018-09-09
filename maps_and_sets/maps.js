// Cleaner data-structure for common algorithms based on maps.


let m = new Map()
let s = Symbol() // immutable

m.set("hello", 42)
m.set([1,2], 42)

// m.set(s, 34)
// console.log(m.get(s) === 34)
// m.size === 2

for (let [ key, val ] of m.entries())
    console.log(key + " = " + val);


console.log(Symbol(1));
console.log(Symbol(2));

console.log(1 == 1);
console.log(Symbol(1) == Symbol(1));