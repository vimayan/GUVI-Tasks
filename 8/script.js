const resultContent = document.getElementById("resultContent");

const searchInput = document.getElementById("search");

const authorContent = document.getElementById("author");
const errorContent = document.getElementById("alert");

const previousContent = document.getElementById("previous");
const nextContent = document.getElementById("next");

let poetryBook = [];
const pageCount = 50;
const totalPage = poetryBook.length/pageCount;

let count=0;



function authorLists() {
  let url = "https://poetrydb.org/author";
  let author = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();
    req.onload = function () {
      let data = JSON.parse(req.response);

      // console.log(data);

      resolve(data);
    };

    req.onerror = function () {
      reject("something went wrong");
    };
  });

  author
    .then((data) => {
      data.authors.forEach((name) => {
        let authorContainer = document.createElement("span");
        authorContainer.innerHTML = name;

        authorContainer.setAttribute(
          "class",
          "text-primary badge badge-warning"
        );
        authorContent.appendChild(authorContainer);
      });
    })
    .catch((err) => console.log(err));
}

window.onload = authorLists();

function inputField(inputContent) {
  let url = `https://poetrydb.org/${inputContent}/${searchInput.value}/author,title,lines.text`;
  let poetry = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    req.open("GET", url);
    req.send();
    req.onload = function () {
      resolve(req.response);
    };

    req.onerror = function () {
      reject("something went wrong");
    };
  });

  poetry
    .then((data) => {

      if (!(data.status==404)) {
        const newdata  = JSON.stringify(data)
            poetryBook = [ ...newdata.split("\\n")]

            resultContent.innerHTML='';
            count=1;
            poetryBook.slice(0,pageCount).forEach((lines) => {
            let resultContainer = document.createElement("span");
            resultContainer.innerHTML = lines;
    
            resultContainer.setAttribute(
              "class",
              "text-primary d-block text-wrap  badge"
            );
            resultContent.appendChild(resultContainer);
          });

         

        return;
      } else {
        count=1;
        resultContent.innerHTML='';
        errorContent.innerHTML = `${data["reason"]}`;
        errorContent.classList.toggle("d-none");
        setTimeout(() => {
          errorContent.classList.toggle("d-none");
        }, 2000);
        return;
      }
    })
    .catch((err) => {
      resultContent.innerHTML='';
      errorContent.innerHTML = `${err}`;
      errorContent.classList.toggle("d-none");
      setTimeout(() => {
        errorContent.classList.toggle("d-none");
      }, 2000);
    });
}

const changePage=(e)=>{
console.log(e.target.innerHTML);
if(e.target.innerHTML=='Next'){
        ++count
        resultContent.innerHTML='';
  poetryBook.slice(pageCount*(count-1),count*pageCount).forEach((lines) => {
    let resultContainer = document.createElement("span");
    resultContainer.innerHTML = lines;

    resultContainer.setAttribute(
      "class",
      "text-primary d-block text-wrap  badge"
    );
    resultContent.appendChild(resultContainer);
  });
}

if(e.target.innerHTML=='Previous'){
  --count
  resultContent.innerHTML='';
  poetryBook.slice(pageCount*(count-1),count*pageCount).forEach((lines) => {
    let resultContainer = document.createElement("span");
    resultContainer.innerHTML = lines;

    resultContainer.setAttribute(
      "class",
      "text-primary d-block text-wrap  badge"
    );
    resultContent.appendChild(resultContainer);
  });
}
  }




previousContent.addEventListener("click",changePage);
nextContent.addEventListener("click",changePage);


