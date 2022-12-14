import { API_URL } from "./config";
import { getJson } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  },

}

export const loadRecipe = async function(id) {
  try {
      const data = await getJson (`${API_URL}${id}`);

      const { ...recipe } = data.data.recipe;
      state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
      }
  
      console.log(recipe);
  } catch(err) {
    console.error(`${err} has occured!!!!`);
    throw err;
  }
}

export const loadSearchResults = async function(query) {
  try {
    state.search.query = query;
    const data = await getJson(`${API_URL}?search=${query}`);
    console.log(data);  

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      }
    });

} catch (err) {
    console.error(`${err} has occured!!!!`);
    throw err;
}
}