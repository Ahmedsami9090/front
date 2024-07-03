const el = document.getElementById("displayGames");
const gameSelected = document.querySelector("#game-selected");
const categories = document.querySelectorAll(".nav-link");
export const gameList = document.querySelector("#games-displayed");
import { DisplayDetails } from "./displayDetails.js";
import { DisplayGames } from "./displayGames.js";
let displayGames = new DisplayGames();
let displayDetails = new DisplayDetails();

categories.forEach((category) => {
  //add active class to selected category
  category.addEventListener("click", function () {
    categories.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

function getCategory() {
  // get selected category and pass it to getApi()
  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", () => {
      getApi(categories[i].innerText);
    });
  }
}
getCategory();
async function getApi(category) {
  let result = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "119e069a33msh89f39242721dc96p1865c4jsne3676f2c06a1",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  );
  let response = await result.json();
  displayGames.display(response, el);
  let games = document.querySelectorAll(".col");
  for (let i = 0; i < games.length; i++) {
    // display game details
    games[i].addEventListener("click", () => {
      console.log(i);
      displayDetails.getDetails(response[i], gameSelected);
    });
  }
}
getApi("mmorpg");
