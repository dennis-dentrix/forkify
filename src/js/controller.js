import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    // loading recipe
    await model.loadRecipe(id);
  
    // rendering the recipe 

    recipeView.render(model.state.recipe)
     
  }catch(err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    // 1) get the search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load the search results
    await model.loadSearchResults(query);

    // 3) Render the results
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
}

const init = function () {
  recipeView.addHandlerRender(controlRecipes());
  searchView.addSearchHandler(controlSearchResults)
}

init();