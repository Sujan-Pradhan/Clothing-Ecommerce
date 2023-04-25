export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action) {
      return next(action);
    }
    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currState: ", store.getState());
  
    next(action);
    console.log("nextState: ", store.getState());
  };