import { displayMeals } from "./displayOnStart.js";
export async function displayIngredients(api, element) {
  let result = await fetch(api);
  let response = await result.json();
  let box = ``;
  for (let i = 0; i < response.meals.length; i++) {
    if (response.meals[i].strDescription) {
      box += `<div class="group img-div box-border rounded-lg relative overflow-hidden cursor-pointer">
        <h1 class="text-5xl text-center"><i class="fa-solid fa-drumstick-bite text-white"></i></h1>
        <h2 class="text-white mt-3 text-2xl font-semibold text-center">${response.meals[i].strIngredient}</h2>
        <p class="px-3 overflow-hidden line-clamp-3 font-semibold text-lg text-white">${response.meals[i].strDescription}</p> 
 </div>`;
    }
  }
  element.innerHTML = box;
  let selectedIng = document.querySelectorAll(".group");
  for (let i = 0; i < selectedIng.length; i++) {
    selectedIng[i].addEventListener("click", function () {
      let _api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${response.meals[i].strIngredient}`;
      displayMeals(_api, element);
    });
  }
}
