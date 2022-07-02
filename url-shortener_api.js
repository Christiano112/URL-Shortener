// POST API
// var raw = "{\r\n    \"longUrl\":\"https://www.cbsnews.com/news/missing-details-investigation-48-hours/\"\r\n}";

const form = document.getElementById("url-form");

const preUrl = new FormData(form);
const url = new URLSearchParams(preUrl);

console.log([...url]);

var requestOptions = {
    method: 'POST',
    body: url,
    redirect: 'follow'
};

fetch("https://shorturl22.herokuapp.com/api/url/shorten", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));




// GET API
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("shorturl22.herokuapp.com/dG71svLsL", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));