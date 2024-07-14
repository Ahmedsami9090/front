let searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let categoryApi = "https://www.themealdb.com/api/json/v1/1/categories.php";
let areaApi = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
let ingredientsApi = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
const menuBtn = document.getElementById("menu-btn");
const mainSearch = document.getElementById("result-view");
const menuDiv = document.getElementById("menu-icon");
const categories = document.querySelector("#Categories");
const area = document.querySelector('#Area')
const ingredients = document.querySelector('#Ingredients')
const searchMeal = document.getElementById('Search')
import { contact } from "./contact.js";
import { displayArea } from "./displayArea.js";
import { displayCategories } from "./displayCategories.js";
import { displayIngredients } from "./displayIngredient.js";
import { displayMeals } from "./displayOnStart.js";
import { letterSearch, nameSearch } from "./search.js";

displayMeals(searchApi, mainSearch);

menuBtn.addEventListener("click", function () {
  let menuWidth = menuDiv.offsetLeft;
  if (menuWidth === 0) {
    $("#menu-list").animate({ width: `304px` }, 500);
    $("#list").slideDown(700, function () {
      $("#social").slideDown(400);
    });
  } else {
    $("#menu-list").animate({ width: `-${menuWidth}px` }, 1000);
    $("#list").slideUp(700);
    $("#social").slideUp(500);
  }
});
categories.addEventListener("click", function () {
  document.getElementById('result-sec').classList.remove('hidden')
  document.getElementById('search-sec').classList.add('hidden')
  displayCategories(categoryApi, mainSearch);
});

area.addEventListener('click', function(){
  document.getElementById('result-sec').classList.remove('hidden')
  document.getElementById('search-sec').classList.add('hidden')
  displayArea(areaApi, mainSearch)
})

ingredients.addEventListener('click', function(){
  document.getElementById('result-sec').classList.remove('hidden')
  document.getElementById('search-sec').classList.add('hidden')
  displayIngredients(ingredientsApi, mainSearch)
})

searchMeal.addEventListener('click', function(){
  document.getElementById('result-sec').classList.add('hidden')
  document.getElementById('search-sec').classList.remove('hidden')
document.getElementById('nameSearch').addEventListener('input', function(){
  let input = this.value
  nameSearch(input,mainSearch)
  document.getElementById('result-sec').classList.remove('hidden')
})
document.getElementById('letterSearch').addEventListener('input', function(){
  let input = this.value
  letterSearch(input, mainSearch)
  document.getElementById('result-sec').classList.remove('hidden')
})
})
document.getElementById('Contact').addEventListener('click', function(){
  contact(mainSearch)
})

