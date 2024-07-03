export class DisplayGames {
  display(response, element) {
    let box = ``;
    for (var i = 0; i < response.length; i++) {
      box += `
            <div class="col">
            <div class="card h-100 bg-transparent text-white">
                <img
                    class="card-img-top"
                    src="${response[i].thumbnail}"
                    alt="Card image cap"
                />
                <div class="p-2">
                    <div class="d-flex justify-content-between">
                        <h4 class="card-title h6">${response[i].title}</h4>
                        <h4 class="card-logo h6">free</h4>
                    </div>
                    <div class="desc-div">
                        <p class="game-desc h6">${response[i].short_description}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="game-cat h6">${response[i].genre}</h5>
                        <h5 class="game-console h6">${response[i].platform}</h5>
                    </div>
                </div>
            </div>
            </div>`;
    }
    element.innerHTML = box;
  }
}
