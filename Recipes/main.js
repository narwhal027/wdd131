import recipes from './recipes.mjs';

/* Helper Functions */
function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[random(list.length)];
}

function getStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  let starsHTML = '';
  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<span aria-hidden="true" class="icon-star">⭐</span>`;
  }
  if (halfStar) {
    starsHTML += `<span aria-hidden="true" class="icon-star">⭐</span>`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  return starsHTML;
}

/* Template Function */
function recipeTemplate(recipe) {
  return `
  <div class="recipe">
    <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
    <div class="recipe-details">
      <p class="recipe-tag">${recipe.tags.join(', ')}</p>
      <h2 class="recipe-name">${recipe.name}</h2>
      <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
        ${getStars(recipe.rating)}
      </div>
      <p class="recipe-description">${recipe.description}</p>
    </div>
  </div>
  `;
}

/* Render Function */
function renderRecipes(recipeList) {
  const container = document.getElementById('recipe-container');
  container.innerHTML = recipeList.map(recipeTemplate).join('');
}

/* Initialization: Show a single random recipe on page load */
function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

/* Filtering Functionality */
function filterRecipes(query) {
  query = query.toLowerCase();
  return recipes.filter(recipe => {
    const inName = recipe.name.toLowerCase().includes(query);
    const inDescription = recipe.description.toLowerCase().includes(query);
    const inTags = recipe.tags.some(tag => tag.toLowerCase().includes(query));
    const inIngredients =
      recipe.recipeIngredient &&
      recipe.recipeIngredient.some(ing => ing.toLowerCase().includes(query));
    return inName || inDescription || inTags || inIngredients;
  }).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const searchInput = document.querySelector('.search-bar input');
  const query = searchInput.value;
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', () => {
  init();
  const searchIcon = document.querySelector('.search-bar .search-icon');
  searchIcon.addEventListener('click', searchHandler);
  const searchInput = document.querySelector('.search-bar input');
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      searchHandler(event);
    }
  });
});
