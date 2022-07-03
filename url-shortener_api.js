// POST API

const formNew = document.getElementById("url-form");

formNew.addEventListener("submit", function (e) {
    e.preventDefault();

    // const preUrl = new FormData(formNew);
    // const url = new URLSearchParams(preUrl);

    // console.log([...url]);

    // var raw = "{\r\n    \"longUrl\":\"https://www.cbsnews.com/news/missing-idaho-kids-jj-vallow-tylee-ryan-lori-daybell-details-investigation-48-hours/\"\r\n}";
    // let yourUrl = document.getElementById("lurl").value;
    // var raw = "longUrl:yourUrl"

    // let url = '"longUrl":"https://www.cbsnews.com/news/missing-idaho-kids-jj-vallow-tylee-ryan-lori-daybell-details-investigation-48-hours/"'

    let inputUrl = document.getElementById("lurl").value;
    // var longUrl = inputUrl;

    
    let url = {"longUrl": inputUrl}

    var requestOptions = {
        method: 'POST',
        body: url,
        redirect: 'follow'
    };

    fetch("https://shorturl22.herokuapp.com/api/url/shorten", requestOptions)
        .then(function (res) {
            console.log(res.status);
            console.log(url)
            // if (res.status === 404) {
            //     window.open("notfound.html", target = "_blank");
            // }

            return res.text();
        })

        .then(result => console.log(result))
        .catch(error => console.log('error', error));


    // GET API
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("shorturl22.herokuapp.com/dG71svLsL", requestOptions)
//     .then(function (res) {
//         console.log(res.status);
//         if (res.status === 404) {
//             window.open("notfound.html", target = "_blank");
//         }

//         return res.text();
//     })
//     // .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

})







// .then(function (res) {
//     console.log(res.status);
//     if (res.status === 404) {
//         alert(`User with email does not exist.`)
//     } else if (res.status === 401) {
//         alert(`Incorrect password, try again!`)
//     } else {
//         setTimeout(openNew, 2000)
//         function openNew() {
//             alert("Login is Successful");
//             window.open("home.html", target = "_self")
//         }
//     }
//     // if(!res.ok) {
//     //     throw new Error("HTTP status " + res.status);
//     // }
//     return res.json();
// })