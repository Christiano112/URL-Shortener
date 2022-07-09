// POST API

const formNew = document.getElementById("url-form");

formNew.addEventListener("submit", function (e) {
    e.preventDefault();

    let longurl = document.getElementById("lurl").value;
    let notfound = "notfound.html";
    // console.log(longurl);

    let linkRequest = {
        destination: `${longurl}`,
        domain: { fullName: "rebrand.ly" }
        //, slashtag: "A_NEW_SLASHTAG"
        // , title: "Rebrandly YouTube channel"
    }

    let requestHeaders = {
        "Content-Type": "application/json",
        "apikey": "bd08b6e8ba2740939d638140b3831425",
        // "workspace": "YOUR_WORKSPACE_ID"
    }

    $.ajax({
        url: "https://api.rebrandly.com/v1/links",
        type: "post",
        data: JSON.stringify(linkRequest),
        headers: requestHeaders,
        dataType: "json",
        success: (link) => {
            console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
            document.getElementById("link-input").value = `${link.shortUrl}`;

//             setTimeout(openValidLink, 2000);

//             function openValidLink() {
//                 window.open(`${link.shortUrl}`, "_blank");
//             }

            const first = document.getElementById("lurl");
            const time = new Date();
            const date = new Date();

            if (first.value === "") {
                return
            }

            localStorage.setItem("links", JSON.stringify([...JSON.parse(localStorage.getItem("links") || "[]"),
            { originalLink: first.value, bubbedLink: link.shortUrl, clickedTime: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), clickedDate: date.toLocaleDateString() }]));

            first.value = "";
        },

        error: (error) => {
            console.log(`Error: ${error}`);
            document.getElementById("link-input").value = "Input a valid URL";
            document.getElementById("link-input").style.color = "red";

            setTimeout(openLink, 2000);

            function openLink() {
                window.open(`${notfound}`, '_blank');
            }
        }
    });
})
