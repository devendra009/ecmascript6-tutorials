// Using var
for (var k=0; k < 10; k++) {
  console.log(k);
}

// Scope of k is outside the for loop
console.log("Final Value of k: " + k);

// Using let keyword
let i = 100;

for (i=0; i < 10; i++) {
  console.log(i);
}

console.log("Final Value of i: " + i);


let j = 100;

for (let j=0; j < 10; j++) {
  console.log(j);
}

console.log("Final Value of j: " + j);
