import { displayMeals } from "./displayOnStart.js";

export function nameSearch(input, element) {
  let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  displayMeals(api, element);
}
export function letterSearch(input, element) {
  let api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;
  displayMeals(api, element);
}
