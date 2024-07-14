import { displayMeals } from "./displayOnStart.js";
export async function displayCategories(api, element) {
  let result = await fetch(api);
  let response = await result.json();
  let box = ``;
  for (let i = 0; i < response.categories.length; i++) {
    box += `<div class="group img-div box-border rounded-lg relative overflow-hidden cursor-pointer">
      <img src="${response.categories[i].strCategoryThumb}" class="w-full rounded-lg" alt="..">
      <div class="overflow-hidden group-hover:-translate-y-full transition-all duration-1000 rounded-lg absolute translate-y-full  left-0 w-full h-full flex flex-col items-center bg-gray-300 bg-opacity-70">
      <h2 class="text-3xl font-semibold ps-3">${response.categories[i].strCategory}</h2>
      <p class="px-3 overflow-hidden line-clamp-3 font-semibold text-lg">${response.categories[i].strCategoryDescription}</p>
      </div>
    </div>`;
  }
  element.innerHTML = box;
  let selectedCat = document.querySelectorAll(".img-div");
  for (let i = 0; i < selectedCat.length; i++) {
    selectedCat[i].addEventListener("click", function () {
      let _api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${response.categories[i].strCategory}`;
      displayMeals(_api, element);
    });
  }
}
