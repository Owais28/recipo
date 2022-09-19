const cakeStore = {
  numOfCakes: 10,
};

export const cakeReducer = (store: any = cakeStore, action: any) => {
  switch (action.type) {
    case "BYE_CAKE":
      return {
        ...store,
        numOfCakes: store - 1,
      };
    default:
      return store;
  }
};
