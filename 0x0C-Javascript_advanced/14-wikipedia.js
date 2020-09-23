function createElement(data) {
  const p = document.createElement("p");
  p.innerText = data;

  const body = document.querySelector("body");
  body.appendChild("p");
}

function queryWikipedia(callback) {
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(xhttp.response.query.pages["21721040"].extract);
    }
  };
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  http.open("GET", url, true);
  http.responseType = "json";
  http.send(null);
}

queryWikipedia(createElement);
