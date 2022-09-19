import { configureStore } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { type } from "os";
import thunk from "redux-thunk";

// const {configureStore} = require('@reduxjs/toolkit')

export const BUY_CAKE = "BUY_CAKE";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const RECIPE_FETCHED = "RECIPE_FETCHED";

// buyCake() Action Creater
export const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "Buy a cake from the store",
  };
};

export const SearcRecipe = (recipe: string) => {
  return {
    type: SEARCH_RECIPE,
    info: "Search This Recipe",
    payload: {
      recipeToSearch: recipe,
    },
  };
};

export const fillRecipes = (resipes: any) => {
  return {
    type: RECIPE_FETCHED,
    info: "Fill search results array",
    payload: {
      resultsOfSearch: resipes.results,
    },
  };
};

export const setLoadingTrue = () => {
  return {
    type: "LOADING_TRUE",
    info: "Searching for recipes",
  };
};

interface RecipesInterface {
  results: Array<object>;
}

export const fetchRecipes = (searchTerm: string = "pizza") => {
  return (dispatch) => {
    dispatch(setLoadingTrue());
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=f05e9379b7634f34bec1b7dc4df4fe65`
      )
      .then((res: any) => {
        console.log(res.data);
        dispatch(fillRecipes(res.data));
      });
  };
};

const cakeStore = {
  numOfCakes: 10,
  searchQuery: "",
  searchResults: [],
  isLoading: false,
};

const cakeReducer = (store: any = cakeStore, action: any) => {
  switch (action.type) {
    case "BYE_CAKE":
      return {
        ...store,
        numOfCakes: store - 1,
      };
    case SEARCH_RECIPE:
      return {
        ...store,
        searchQuery: action.payload.recipeToSearch,
      };
    case RECIPE_FETCHED:
      return {
        ...store,
        searchResults: action.payload.resultsOfSearch,
        isLoading: false,
      };
    case "LOADING_TRUE":
      return {
        ...store,
        isLoading: true,
      };
    default:
      return store;
  }
};

export const store = configureStore({
  reducer: cakeReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
