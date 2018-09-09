

var text = "lorem ipsum lorem ipsum "
+ "lorem ipsum lorem ipsum ";
console.log(text);

var text1 = ["lorem ipsum lorem ipsum",
"lorem ipsum lorem ipsum "].join(" ");
console.log(text1);


// Multiline
var text2 = `this is line 1
this is line 2
`;
console.log(text2);


// Templates & Substitutions

var value1 = 10, value2 = 20;
var listItems = ['rose', 'lily', 'lavender'];
var arr = {car:'Swift', brand:'Honda'};

var text2 = `this is line 1
this is line 2
this is value ${value1}

Addition of values = ${value1 + value2}

Flowers: ${listItems}

Car: ${arr.car}
Car Brand: ${arr.brand}
`;
console.log(text2);