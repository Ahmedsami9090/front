import { gameList } from "./index.js";
export class DisplayDetails {
  async getDetails(response, element) {
    let result = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${response.id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "119e069a33msh89f39242721dc96p1865c4jsne3676f2c06a1",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    let details = await result.json();
    console.log(details);
    let box = `
            <div class="space"></div>
            <div class="text-white d-flex justify-content-between px-3">
                <h1>Game Details</h1>
                <a class="text-white fs-5 me-md-3" id="goBackBtn"><i class=" p-1 fa-solid fa-x border rounded-2 border-2 border-white"></i></a>
            </div>
            <div class="col-sm-1 col-md-12 px-3" id="gameDetails">
                <div class="d-flex flex-column flex-md-row">
                    <img class="img-fluid w-100 h-100" src="${details.thumbnail}" alt="game img"/>
                    <div class="text-white ps-4">
                        <h2>Title: <span class="">${details.title}</span></h2>
                        <h4 class="h6">Category: <span class="gameInfo">${details.genre}</span></h4>
                        <h4 class="h6">Platform: <span class="gameInfo">${details.platform}</span></h4>
                        <h4 class="h6">Status: <span class="gameInfo">${details.status}</span></h4>
                        <p class="h6">${details.description}</p>
                        <a class="playGame h4 border border-2 rounded-2 border-white text-decoration-none" href="${details.game_url}" target="_blank">Play Game</a>
                    </div>
                </div>
            </div>
        `;
    element.innerHTML = box;
    gameList.classList.add("d-none");
    element.classList.remove("d-none");
    document.getElementById("goBackBtn").addEventListener("click", function () {
      gameList.classList.remove("d-none");
      element.classList.add("d-none");
    });
  }
}
