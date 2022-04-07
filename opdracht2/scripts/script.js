const allMovies = document.querySelectorAll("main ul li");

const filters = document.querySelectorAll("header aside input");

// const toggleContainer = document.querySelector("div.btn");
const toggleContainer = document.querySelector("section:last-of-type button");
const savedMovieContainer = document.querySelector("section:last-of-type");
const savedMovieList = document.querySelector("section ul");

const favoriteButton = document.querySelectorAll("ul:first-of-type li button");

const favoriteCounter = document.querySelector("section:last-of-type p");
let favoriteCounterNumber = 0;




function filterList(event){
  for(let i=0; i<allMovies.length; i++) {
  allMovies[i].classList.remove("zichtbaar");
  }

  // page load geeft als event undefined
  if(event == undefined || event.target.value == "all") {
    for(let i=0; i<allMovies.length; i++) {
      allMovies[i].classList.add("zichtbaar");
      }
      return;
  }

  // zoek alle li elementen met de class van de gekozen value
  const movieOptions = document.querySelectorAll("." + event.target.value);

  for(let i=0; i<movieOptions.length; i++) {
    movieOptions[i].classList.add("zichtbaar");
  }
}

filterList();







// sla film op, innerHTML wordt gedupliceerd
function saveMovie(event) {
  const filmHTML = event.currentTarget.parentNode;

  filmHTML.classList.add("favoriet");

  const liElement = document.createElement("li");
  // classlist voor aparte style opggeslagen film
  liElement.classList.add("favoriet");
  liElement.innerHTML = filmHTML.innerHTML;

  // voeg film toe aan "opgeslagen" filmlijst
  savedMovieList.appendChild(liElement);

  // update film favoriet knoppen en eventlisteners
  const removeFavoriteButton = document.querySelectorAll("section ul li button");
  favoriteCounterNumber++;
  favoriteCounter.textContent = favoriteCounter.textContent = "FAVORIETEN" + " (" + favoriteCounterNumber + ")" ;

  for (let i=0; i<removeFavoriteButton.length; i++) {
    removeFavoriteButton[i].addEventListener("click", removeMovie);
  }
}

function removeMovie(event){
  event.currentTarget.parentNode.remove();
  favoriteCounterNumber--;
  favoriteCounter.textContent = "FAVORIETEN" + " (" + favoriteCounterNumber + ")";
}

for (let i=0; i<favoriteButton.length; i++) {
  favoriteButton[i].addEventListener("click", saveMovie);
}





// function menu
function slide() {
  savedMovieContainer.classList.toggle("showmenu");
}

toggleContainer.addEventListener("click", slide);

for (let i=0; i<filters.length; i++) {
  filters[i].addEventListener("click", filterList);
}