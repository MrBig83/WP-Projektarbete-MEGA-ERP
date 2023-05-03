//Importerar element
const btn = document.querySelector ("button");
const container2 = document.querySelector (".container2");
const h1 = document.querySelector ("h1");
const huvudbild = document.querySelector (".huvudbild");
const h3container = document.querySelector (".h3container");
const pListContainer = document.querySelector (".pListContainer");
const dynamic = document.querySelector (".dynamic");
const contentContainer = document.querySelector (".contentContainer");
//Här ska vi ha fetch
//=========================================================
const requestOptions = {
    method: 'GET',
    redirect: 'follow', 
    
  };

async function getProducts(){
  const response = await fetch("http://localhost/WP-Projektarbete-MEGA/wp-json/wc/v3/products?token=kaffe")
  const data = await response.json();
  console.log(data);
}
  
async function getPosts() {
    const response = await fetch("http://localhost/WP-Projektarbete-MEGA/wp-json/wp/v2/posts")
    const data = await response.json();
    console.log(data);
    addPostsToWebpage(data);
}
getPosts();
getProducts();

function addPostsToWebpage(data) {

  const div = document.createElement("div");
  div.classList.add("contentDiv")
  contentContainer.appendChild(div);

  for (const post of data) {
  
    const div = document.createElement("div");
    div.classList.add("contentWrapper")
    contentContainer.appendChild(div)

    const img = document.createElement("img");
    img.classList.add("css-for-image");
    div.appendChild(img);
    img.src = post.images.medium 

    const p = document.createElement("p");
    p.classList.add("css-for-postname");
    p.innerText = post.title.rendered;
    div.appendChild(p);
    
  }
}

function addProductsToWebpage(data){
  console.log(data)
}