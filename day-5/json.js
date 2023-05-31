const jsonObject = {
  "name": "John",
  "age": 30,
  "city": "New York"
};

// Using a for...in loop
for (let key in jsonObject) {
  console.log(key + ": " + jsonObject[key]);
}

// Using a for...of loop
const entries = Object.entries(jsonObject);
for (let [key, value] of entries) {
  console.log(key + ": " + value);
}

// Using Array.forEach() method
Object.entries(jsonObject).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
