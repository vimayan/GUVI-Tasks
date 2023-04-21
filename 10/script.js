function getDefinition() {
  var word = document.getElementById("word").value;
  var wordMeaning = document.getElementById("meaning");

  meaning.innerHTML = "";
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data[0].meanings.forEach((meaning) => {
        meaning.definitions.slice(0, 2).forEach((definations) => {
          const wordDefination = definations.definition;
          const wordExample = definations.example;
          h1 = document.createElement("h2");
          h4 = document.createElement("h4");
          p = document.createElement("p");
          hr = document.createElement("hr");
          h1.innerHTML = "Defination:";
          h4.innerHTML = wordDefination;
          p.innerHTML = wordExample;
          wordMeaning.append(h1, h4, p, hr);
        });
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
