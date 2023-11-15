const form = document.querySelector("#search-form");
const ul = document.querySelector("#recipe-list");
const ENDPOINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "e57ce14d";
const APPLICATION_KEY = "fb9063a7966d7bd1fa3921eca5e34f57";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchForRecipe();
});

async function searchForRecipe() {
  const searchString = document.querySelector("#search-input").value;

  const response = await fetch(
    `${ENDPOINT}?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APPLICATION_KEY}`
  );

  const data = await response.json();
  const recipes = data.hits;
  displayRecipes(recipes);
}

const displayRecipes = (recipes) => {
  ul.innerHTML = "";
  recipes.forEach(({ recipe }) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.src = recipe.image;
    p.textContent = recipe.label;
    li.appendChild(img);
    li.appendChild(p);
    ul.appendChild(li);
  });
};
