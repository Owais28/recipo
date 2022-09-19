import { configureStore } from "@reduxjs/toolkit";

// const {configureStore} = require('@reduxjs/toolkit')

export const BUY_CAKE = "BUY_CAKE";
export const SEARCH_RECIPE = "SEARCH_RECIPE";

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

const cakeStore = {
  numOfCakes: 10,
  searchQuery: "",
  // notification: {
  //   unread: 0,
  //   archiveMessages: [
  //     {
  //       time: "",
  //       link : '',
  //       type : '',
  //       body : 
  //     },
  //   ],
  //   messages: [
  //     {
  //       time: "",
  //     },
  //   ],
  // },
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
    default:
      return store;
  }
};

export const store = configureStore({
  reducer: cakeReducer,
});
