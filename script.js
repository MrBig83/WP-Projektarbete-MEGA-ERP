//Importerar element
const btn = document.querySelector ("button");
const container2 = document.querySelector (".container2");
const h1 = document.querySelector ("h1");


//Här ska vi ha fetch

function getPosts() {
    fetch("http://localhost/WP-Projektarbete-MEGA/wp-json/wp/v2/posts")
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        listOfPosts = posts;
        addPostsToWebpage();
    });   
}

function addPostsToWebpage() {
    const dynamicContainer = document.querySelector(".dynamic");
    for (const post of listOfPosts) {

        const img = document.createElement("img");
        img.classList.add("css-for-image");
        dynamicContainer.appendChild(img);
        img.src = `${post.featured_media}`   //Detta måste kopplas till json respons?

        const h3 = document.createElement("h3");
        h3.classList.add("css-for-postname");
        h3.innerText = post.name;
        div.appendChild(h3);

       };
    }

