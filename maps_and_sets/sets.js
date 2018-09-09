// Cleaner data-structure for common algorithms based on sets.

let s = new Set()
s.add("hello").add("goodbye").add("hello")
console.log(s.size === 2);
console.log(s.has("hello") === true);
for (let key of s.values()) // insertion order
    console.log(key)