# Giphy-search
Giphy search is a search engine that user can search in it to get some giphs.

#### `structure:`
- Search bar
- Giphy api

# Installation 

You can clone the project and open `index file`.

# How it works
To get data by clicking on submit botton:

``` js 
// click event with mouse
document.querySelector(".js-go").addEventListener("click", function () {
  // change api search
  api = `https://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=DCMPjoKyFOZBiJ4SF2K9tIUWuIrAZQt2`;
  get();
}); 
```

To get data by clicking on enter key on keyboard :

``` js
// click event with key
document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
  // change api search
  api = `https://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=DCMPjoKyFOZBiJ4SF2K9tIUWuIrAZQt2`;
  if (e.which === 13) {
    get();
  }
}); 
```

Flow of data :

``` js 
// get api with function
async function get() {
  let response = await fetch(api);
  let data = await response.json();
  let urls = data.data;
  let cont = document.querySelector(".js-container");
  // remove all old results
  cont.innerHTML = "";
  // put results in container by use forEach function
  urls.forEach((x, i) => {
    // setTimeout function
    setTimeout(function () {
      cont.innerHTML += ` <img src="${x.images.fixed_height.url}" alt="cats"> `;
    }, i * 100);
  });
}
```
You can check out for [live preview](https://wonderful-dieffenbachia-3b1d4d.netlify.app)
