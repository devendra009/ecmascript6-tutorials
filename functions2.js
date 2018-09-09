

function add(a, b) {
  return a + b;
}

console.log("Example 1");
console.log(add(1, 2));

console.log("--------------------------------");
console.log(" ");


// Fat Arrow Notation
add2 = (a, b) => {
  return a + b;
}

console.log("Example 2");
console.log(add2(1, 2));

console.log("--------------------------------");
console.log(" ");


add3 = (a, b, callback) => {
  return callback(a + b);
}

console.log("Example 3");
add3(2, 4, (result) => {
  console.log(result)
})
console.log("--------------------------------");
console.log(" ");



add4 = (a, b) => a + b;

console.log("Example 4");
console.log(add4(5, 6));

console.log("--------------------------------");
console.log(" ");



add5 = ([a, b]) => a + b;

console.log("Example 5");
console.log(add5([6, 7]));

console.log("--------------------------------");
console.log(" ");



function Count() {
  this.count = 0;

  this.increment = function() {
    setTimeout(function() {
      this.count++;
    }, 1000);

    console.log(this.count);
  }
};

console.log("Example 6");

var obj = new Count();
obj.increment();
console.log( obj.count );

console.log("--------------------------------");
console.log(" ");


// Lexical `this` scope
function NewCount() {
  this.count = 0;

  this.increment = () => {
    setTimeout(() => {
      this.count++;
    }, 1000);
  }
};

console.log("Example 7");

var newobj = new NewCount();
newobj.increment();
setTimeout(() => {
  console.log("Lexical this working: New Count: ", newobj.count );
}, 1500);

console.log("--------------------------------");
console.log(" ");


