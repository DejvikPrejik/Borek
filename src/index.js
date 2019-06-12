const request = require("request");

const options = {
  url: "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
  headers: {
    "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    accept: "application/json"
  }
};

function callback(result) {
  console.log(result.status, result.headers, result.body);
}
request(options, callback);

app.listen(8080, function() {
  console.log("Server běží na portu 8080");
});
