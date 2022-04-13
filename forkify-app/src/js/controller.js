import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSES_SEC } from './config.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    //update results to view highlighted search result
    resultView.update(model.getSearchResultsPage());
    bookmarkView.update(model.state.bookmarks);
    //loading recipe
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    //get query
    const query = searchView.getQuery();

    if (!query) return;

    resultView.renderSpinner();

    //load results from search filed
    await model.loadSearchResults(query);
    resultView.render(model.getSearchResultsPage(1));
    //render pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error.message);
  }
};

const controlServings = function (newServings) {
  model.updateServings(newServings);
  recipeView.render(model.state.recipe);
};

const controlPagination = function (page) {
  //render new results
  resultView.render(model.getSearchResultsPage(page));
  //render new buttons
  paginationView.render(model.state.search);
  paginationView.update(model.state.search);
};

const controlAddBookmark = function () {
  //add/ remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  //update recipe view
  recipeView.update(model.state.recipe);
  //render bookmarks
  bookmarkView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarkView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    recipeView.render(model.state.recipe);
    addRecipeView.renderMessage();
    bookmarkView.render(model.state.bookmarks);
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSES_SEC * 1000);
  } catch (error) {
    console.log(error);
    addRecipeView.renderError(error.message);
  }
};

const init = function () {
  bookmarkView.addhandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes); //subscriber
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
