async function getOrders(){
    const response = await fetch("http://localhost/WP-Projektarbete-MEGA/wp-json/wc/v3/orders?token=kaffe")
    const orderData = await response.json();
    
    console.log(orderData);

    addOrdersToWebpage(orderData);
  }

  getOrders();
    
  function addOrdersToWebpage(orderData){
    const div = document.createElement("div");
    div.classList.add("contentDiv")
    fourContentContainer.appendChild(div);
  
    for (const post of orderData) {
    
      const div = document.createElement("div");
      div.classList.add("fourContentWrapper")
      fourContentContainer.appendChild(div)
  
    //   const img = document.createElement("img");
    //   img.classList.add("css-for-image");
    //   div.appendChild(img);
    //   img.src = post.images[0].src
  
      const id = document.createElement("p");
      id.classList.add("css-for-postname");
      id.innerText = post.id;
      div.appendChild(id);

      const status = document.createElement("p");
      status.classList.add("css-for-postname");
      status.innerText = post.status;
      div.appendChild(status);

      const total = document.createElement("p");
      total.classList.add("css-for-postname");
      total.innerText = post.total;
      div.appendChild(total);

      const date = document.createElement("p");
      date.classList.add("css-for-postname");
      date.innerText = post.date_created;
      div.appendChild(date);
    }
  }