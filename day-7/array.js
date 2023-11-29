const asian_countries = (url) => {
  var data = new XMLHttpRequest(); //XMLhttp request  to the weather api
  data.open("GET", url);
  data.send();
  data.onload = function () {
    var countries = JSON.parse(data.response).filter(
      (country) => country.continents[0] === "Asia"
    );
    console.log(countries);
  };
};
asian_countries("https://restcountries.com/v3.1/all");

const country_population = (url) => {
  var data = new XMLHttpRequest(); //XMLhttp request  to the weather api
  data.open("GET", url);
  data.send();
  data.onload = function () {
    var countries = JSON.parse(data.response).filter(
      (country) => country.population <= 200000
    );
    console.log(countries);
  };
};
country_population("https://restcountries.com/v3.1/all");

const name_capital_flag = (url) => {
  var data = new XMLHttpRequest(); //XMLhttp request  to the weather api
  data.open("GET", url);
  data.send();
  data.onload = function () {
    var countries = JSON.parse(data.response);
    country_details = [];
    countries.forEach((element) => {
      let country = {};
      country.name = element.name;
      country.capital = element.capital;
      country.flag = element.flag;
      country_details.push(country);
    });
    console.log(country_details);
  };
};
name_capital_flag("https://restcountries.com/v3.1/all");

const country_total_population = (url) => {
  var data = new XMLHttpRequest(); //XMLhttp request  to the weather api
  data.open("GET", url);
  data.send();
  data.onload = function () {
    var countries = JSON.parse(data.response).reduce(
      (a, element) => a + element.population,
      0
    );
    console.log(countries);
  };
};
country_total_population("https://restcountries.com/v3.1/all");

const currency_doller_country = (url) => {
  var data = new XMLHttpRequest(); //XMLhttp request  to the weather api
  data.open("GET", url);
  data.send();
  data.onload = function () {
    console.log("hi");
    var countries = JSON.parse(data.response).filter((element) =>
      element.currencies?.USD ? true : false
    );
    console.log(countries);
  };
};
currency_doller_country("https://restcountries.com/v3.1/all");
