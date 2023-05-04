async function getPosts() {
    const response = await fetch("http://localhost/WP-Projektarbete-MEGA/wp-json/wp/v2/posts")
    const postsData = await response.json();
    
    addPostsToWebpage(postsData);
}
getPosts();

function addPostsToWebpage(postsData) {

    const div = document.createElement("div");
    div.classList.add("contentDiv")
    contentContainer.appendChild(div);
  
    for (const post of postsData) {
    
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