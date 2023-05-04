async function getMedia(){
    const response = await fetch("http://localhost/WP-Projektarbete-MEGA/wp-json/wp/v2/media")
    const mediaData = await response.json();
    
    console.log(mediaData);

    addMediaToWebpage(mediaData);
  }

  getMedia();
    
  function addMediaToWebpage(mediaData){

    // const div = document.createElement("div");
    // div.classList.add("contentDiv")
    // mediaContentContainer.appendChild(div);
  
    for (const post of mediaData) {
      
        const img = document.createElement("img");
        img.classList.add("css-for-media");
        mediaContentContainer.appendChild(img);
        img.src = post.source_url

      
    }
  }