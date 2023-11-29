
//comparing two json object same properties without order

function areEqual(obj1, obj2) {
  // Convert objects to strings with sorted properties
  const stringifiedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
  const stringifiedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

  // Compare the stringified objects
  return stringifiedObj1 === stringifiedObj2;
}

// Example usage
const json1 = { name: "John", age: 30, city: "New York" };
const json2 = { age: 30, name: "John", city: "New York" };

console.log(areEqual(json1, json2)); // Output: true


//using restcountries display the countries flag name

const displayCountryFlags = (url) => {
  var data = new XMLHttpRequest(); //XMLhttp request  to the weather api
  data.open("GET", url);
  data.send();
  data.onload = function () {
    let countries = JSON.parse(data.response);
    for (let i = 0; i < countries.length; i++) console.log(countries[i].flag);
  };
};
displayCountryFlags("https://restcountries.com/v3.1/all");


//using restcountries display the countries name,region,subregion,population.

const displayNamesRegionsPopulations = (url) => {
  var data = new XMLHttpRequest(); //XMLhttp request  to the weather api
  data.open("GET", url);
  data.send();
  data.onload = function () {
    let countries = JSON.parse(data.response);
    for (let i = 0; i < countries.length; i++)
      console.log({
        names: countries[i].name,
        region: countries[i].region,
        subregion: countries[i].subregion,
        population: countries[i].population,
      });
  };
};

displayNamesRegionsPopulations("https://restcountries.com/v3.1/all");








