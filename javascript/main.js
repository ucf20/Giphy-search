var input = document.querySelector("input");
var api = `https://api.giphy.com/v1/gifs/search?q=cat&api_key=DCMPjoKyFOZBiJ4SF2K9tIUWuIrAZQt2`;

// click event with mouse
document.querySelector(".js-go").addEventListener("click", function () {
  // change api search
  api = `https://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=DCMPjoKyFOZBiJ4SF2K9tIUWuIrAZQt2`;
  get();
});
// click event with key
document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
  // change api search
  api = `https://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=DCMPjoKyFOZBiJ4SF2K9tIUWuIrAZQt2`;
  if (e.which === 13) {
    get();
  }
});
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
