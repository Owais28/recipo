import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { BUY_CAKE, LOADING_TRUE, RECIPE_FETCHED, SEARCH_RECIPE } from "./actionTypes";

// const {configureStore} = require('@reduxjs/toolkit')


// // buyCake() Action Creater
// export const buyCake = () => {
//   return {
//     type: BUY_CAKE,
//     info: "Buy a cake from the store",
//   };
// };

// export const SearcRecipe = (recipe: string) => {
//   return {
//     type: SEARCH_RECIPE,
//     info: "Search This Recipe",
//     payload: {
//       recipeToSearch: recipe,
//     },
//   };
// };

// export const fillRecipes = (resipes: any) => {
//   return {
//     type: RECIPE_FETCHED,
//     info: "Fill search results array",
//     payload: {
//       resultsOfSearch: resipes,
//     },
//   };
// };

// export const setLoadingTrue = () => {
//   return {
//     type: "LOADING_TRUE",
//     info: "Searching for recipes",
//   };
// };


// export const fetchRecipes = (searchTerm: string = "pizza") => {
//   return (dispatch) => {
//     dispatch(setLoadingTrue());
//     axios
//       .get(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=f05e9379b7634f34bec1b7dc4df4fe65`
//       )
//       .then((res: any) => {
//         console.log(res.data);
//         dispatch(fillRecipes(res.data.results));
//       });
//   };
// };

const cakeStore = {
  numOfCakes: 10,
  searchQuery: "",
  searchResults: [],
  isLoading: false,
};

const cakeReducer = (store: any = cakeStore, action: any) => {
  switch (action.type) {
    case BUY_CAKE:
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
    case LOADING_TRUE:
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
