
// Default Arguments
function add(a, b=0) {
  return a + b;
}

console.log("Example 1: Default Args");
console.log(add(1));

console.log("--------------------------------");
console.log(" ");


function add2([a, b, c=3]) {
  return a + b  + c;
}

console.log("Example 2: Destructing in function args");
console.log( add2( [1,2] ) );

console.log("--------------------------------");
console.log(" ");


function add3({a, b}) {
  return a + b ;
}

console.log("Example 2: Destructing in function args");
console.log( add3( {a:1, b:2} ) );

console.log("--------------------------------");
console.log(" ");


// Fail-Soft Destructing
function add4({arg1: a, arg2: b}) {
  console.log(a, b)
  return a + b ;
}

console.log("Example 3: Destructing in function args");
console.log( add4( {a:1, b:2} ) );

console.log("--------------------------------");
console.log(" ");
