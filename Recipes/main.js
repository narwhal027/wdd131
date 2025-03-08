import recipes from './recipes.mjs';

const gooseberryCake = recipes.find(recipe =>
  recipe.name === 'Gooseberry cake with vanilla cream and crumble'
);

const container = document.getElementById('recipe-container');

if (gooseberryCake) {
  container.innerHTML = `
    <img src="${gooseberryCake.image}" alt="${gooseberryCake.name}" class="recipe-image">
    <div class="recipe-details">
      <p class="recipe-tag">${gooseberryCake.tags.join(', ')}</p>
      <h2 class="recipe-name">${gooseberryCake.name}</h2>
      <div class="rating" role="img" aria-label="Rating: ${gooseberryCake.rating} out of 5 stars">
        ${getStars(gooseberryCake.rating)}
      </div>
      <p class="recipe-description">${gooseberryCake.description}</p>
    </div>
  `;
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
