let newMap = new Map();
console.log(newMap);
newMap.set(name, "King");
newMap.keys();
console.log(newMap);
newMap.entries();
console.log(newMap);
newMap.set("age", "24");
console.log(newMap);
console.log(newMap.size);
newMap.set();

let userDetails = new Map();
let john = { name: "John" };
let jack = { name: "Jack" };
let mary = { name: "Mary" };

userDetails.set(john, "age", "24").set(jack, "Sales").set(mary, "Operations");
console.log(userDetails);

let userObj = {
  name: "John",
  age: 24,
  city: "Chennai",
};
console.log(userObj);

let userMap = new Map(Object.entries(userObj));
console.log(userMap);

//  Object.fromEntries() => Map to Object
let fruitsMap = new Map([
  ["apple", 25],
  ["mango", 35],
  ["orange", 40],
]);
console.log(fruitsMap);

let fruitsObj = {
  apple: 20,
  mango: 30,
  orange: 40,
};
console.log(fruitsObj);
let newFruitsObj = Object.fromEntries(
  Object.entries(fruitsObj).map((fruit) => {
    return [fruit[0], fruit[1] * 2];
  })
);
console.log(newFruitsObj);

let nameArrOne = ["John", "Jack", "Mary"];
let nameArrTwo = [...nameArrOne];
console.log(nameArrOne);
console.log(nameArrTwo);
nameArrTwo[3] = "Robert";
console.log(nameArrOne);
console.log(nameArrTwo);
