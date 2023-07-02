/* 1. Grab the input value */

document.querySelector(".js-go").addEventListener("click", function () {
    var input = document.querySelector("input").value;
    searchGifs(input);
  });
  
  document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
    var input = document.querySelector("input").value;
    if (e.which === 13) {
      searchGifs(input);
    }
  });
  
  /* 2. Perform the search with the API */
  
  function searchGifs(input) {
    var url =
      "https://api.giphy.com/v1/gifs/search?api_key=Nn9uUl7FYLROFRQ9yrn5rD7vGw4hpIQT&q=" +
      input +
      "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
  
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        pushToDOM(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  /* 3. Show the GIFs */
  
  function pushToDOM(input) {
    var imageUrls = input.data;
    var container = document.querySelector(".js-container");
    container.innerHTML = ""; // Clear previous results
  
    imageUrls.forEach(function (image) {
      var src = image.images.fixed_height.url;
      var img = document.createElement("img");
      img.src = src;
      img.classList.add("container-image");
      container.appendChild(img);
    });
  }
  