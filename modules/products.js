async function getProducts(){
    const response = await fetch("http://localhost/WP-Projektarbete-MEGA/wp-json/wc/v3/products?token=kaffe")
    const productData = await response.json();
    
    console.log(productData);

    addProductsToWebpage(productData);
  }

  getProducts();
    
  function addProductsToWebpage(productData){
    const div = document.createElement("div");
    div.classList.add("contentDiv")
    fourContentContainer.appendChild(div);
  
    for (const post of productData) {
    
      const div = document.createElement("div");
      div.classList.add("fourContentWrapper")
      fourContentContainer.appendChild(div)
  
      const img = document.createElement("img");
      img.classList.add("css-for-image");
      div.appendChild(img);
      img.src = post.images[0].src
  
      const p = document.createElement("p");
      p.classList.add("css-for-postname");
      p.innerText = post.name;
      div.appendChild(p);

      const cat = document.createElement("p");
      cat.classList.add("css-for-postname");
      cat.innerText = post.categories[0].name;
      div.appendChild(cat);

      const price = document.createElement("p");
      price.classList.add("css-for-postname");
      price.innerText = post.price;
      div.appendChild(price);
    }
  }