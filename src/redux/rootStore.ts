import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { BUY_CAKE, LOADING_TRUE, RECIPE_FETCHED, SEARCH_RECIPE } from "./actionTypes";

export const cakeStore = {
  numOfCakes: 10,
};

export const searchStore = {
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
    default:
      return store;
  }
};

export const searchReducer = (store = searchStore, action) => {
  switch (action.type) {
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
  reducer : searchReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
