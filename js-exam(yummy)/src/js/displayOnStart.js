export async function displayMeals(api, element) {
  let result = await fetch(api);
  let response = await result.json();
  let box = ``;
  for (let i = 0; i < response.meals.length; i++) {
    box += `<div class="group img-div box-border rounded-lg relative overflow-hidden cursor-pointer">
      <img src="${response.meals[i].strMealThumb}" class="w-full rounded-lg" alt="..">
      <div class="group-hover:-translate-y-full transition-all duration-1000 rounded-lg absolute translate-y-full  left-0 w-full h-full flex items-center bg-gray-300 bg-opacity-70">
      <h2 class="text-3xl font-semibold ps-3">${response.meals[i].strMeal}</h2>
      </div>
    </div>`;
  }
  element.innerHTML = box;
  let meals = document.querySelectorAll(".group");
  for (let i = 0; i < meals.length; i++) {
    meals[i].addEventListener("click", function () {
      displayDetails(response.meals[i].idMeal, element);
    });
  }
}
async function displayDetails(id, mainElement) {
  let result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let response = await result.json();
  console.log(response.meals[0].strIngredient1);
  let ingredientArr = [];
  let ingredientBox = ``;
  let detailElement = document.getElementById("meal-details");
  document.getElementById("search-sec").classList.add("hidden");
  let box = ``;
  for (let i = 1; i <= 20; i++) {
    if (response.meals[0][`strIngredient${i}`] != "") {
      ingredientArr.push(response.meals[0][`strIngredient${i}`]);
    } else {
      break;
    }
    console.log(ingredientArr);
    ingredientBox += `<h3 class="text-nowrap overflow-hidden box-border bg-blue-500 rounded-lg text-center py-3">${
      ingredientArr[i - 1]
    }</h3>`;
  }

  box = `<div class="flex justify-end w-full">
  <a href="#" id="goBackBtn"><i class="fa-solid fa-arrow-right text-white"></i></a>
  </div>
  <div class="container grid md:grid-cols-3 sm:grid-cols-1 gap-6 text-white">
            <div class="img-view md:col-span-1 sm:w-full">
            <img src="${response.meals[0].strMealThumb}" class="sm:w-full">
            <h1 class="text-3xl font-semibold">${response.meals[0].strMeal}</h1>
            </div>
            <div class="info-view md:col-span-2 sm:col-span-1 ">
              <h1 class="text-3xl font-semibold">Instructions</h1>
              <p class="mt-3">${response.meals[0].strInstructions}</p>
              <h2 class="text-3xl font-semibold">Area: ${response.meals[0].strArea}</h2>
              <h3 class="text-3xl font-semibold">Category: ${response.meals[0].strCategory}</h3>
              <div class="recipes w-full">
                <h3 class="text-3xl font-semibold">Recipes: </h3>
              <div class="grid md:grid-cols-6 sm:grid-cols-2 w-full gap-3 mt-4">
                ${ingredientBox}
              </div>
              <div class="btns-div mt-4 w-full">
                <button class="bg-green-600 transition-all duration-500 hover:bg-green-800 rounded-lg shadow-lg px-4 py-2"><a href="${response.meals[0].strSource}" target="_blank">Sources</a></button>
                <button class="bg-red-600 transition-all duration-500 hover:bg-red-800 rounded-lg shadow-lg px-4 py-2"><a href="${response.meals[0].strYoutube}" target="_blank">Youtube</a></button>
              </div>
            </div>
            </div> 
  </div>`;
  detailElement.innerHTML = box;
  mainElement.classList.remove("grid");
  mainElement.classList.add("hidden");
  detailElement.classList.remove("hidden");
  let goBackBtn = document.querySelector("#goBackBtn");
  goBackBtn.addEventListener("click", function () {
    mainElement.classList.add("grid");
    mainElement.classList.remove("hidden");
    detailElement.classList.add("hidden");
    console.log("hello");
  });
}
