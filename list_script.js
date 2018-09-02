
console.log("Example 1");
function getAPIData() {
  // fetch using ajax

  return ['<h1>Tittle</h1>', 'success', 'Successfully'];
}
let [data, code, message] = getAPIData();

if (code == 'success') {
  console.log("Message: ", message);
  console.log("Data: ", data);
}
console.log("--------------------------------");
console.log(" ");

console.log("Example 2");
let cities = ['Mumbai', 'Delhi', 'Banglore', 'Chennai', 'Jaipur'];

let [city1, city2, city3, city4] = cities;

console.log(city1, city2, city3, city4);
console.log("--------------------------------");
console.log(" ");


console.log("Example 3");
let citiesList2 = ['Mumbai', 'Delhi', 'Banglore', 'Chennai', 'Jaipur'];

let [cityA1, cityA2, ...remainingCities] = citiesList2;

console.log(cityA1, cityA2, remainingCities);

function add(...params) {
  console.log("Adding....", params);
}
add(1, 2, 3, 4);
add(1, 2, 3, 4, 6, 7, 8);

console.log("--------------------------------");
console.log(" ");

console.log("Example 4");
let metroCities = ['Mumbai', 'Delhi', 'Chennai', 'Banglore'];
let tier2Cities = ['Hyderbad', 'Jaipur', 'Indore'];
let tier3Cities = ['Bihar', 'Punjab'];

let indianCities = [...metroCities, ...tier2Cities, ...tier3Cities];
console.log("Indian Cities: ", indianCities);

console.log("--------------------------------");
console.log(" ");


console.log("Example 5");
let fruits = {
  seasonal: ['Mango', 'Kiwi', 'Apple'],
  allseasons: ['Banana', 'Cickoo', 'Grapes']
};

let {seasonal: [tmp1, fruit1], allseasons: fruit2} = fruits;

console.log("Fruits: ", fruit1, fruit2);
console.log("Remaining Fruits: ", tmp1);

console.log("--------------------------------");
console.log(" ");
