import { displayMeals } from "./displayOnStart.js";
export async function displayArea(api, element) {
  let result = await fetch(api);
  let response = await result.json();
  let box = ``;
  for(let i = 0; i < response.meals.length; i++){
    box += `<div class="group img-div box-border rounded-lg relative overflow-hidden cursor-pointer">
           <h1 class="text-5xl text-center"><i class="fa-solid fa-home text-white"></i></h1>
           <h2 class="text-white mt-3 text-2xl font-semibold text-center">${response.meals[i].strArea}</h2> 
    </div>`
  }
  element.innerHTML = box
  let selectedArea = document.querySelectorAll('.group')
  for(let i = 0; i < selectedArea.length; i++){
    selectedArea[i].addEventListener('click', function(){
        let _api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${response.meals[i].strArea}`
        displayMeals(_api, element)
    })
  }
}
