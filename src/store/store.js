import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action) {
    return next(action);
  }
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currState: ", store.getState());

  next(action);
  console.log("nextState: ", store.getState());
};

const middlewares = [loggerMiddleware]; // it actually runs before an action hit the reducers ||  you dispatch the action and before an action hit the reducer then middleware come into play

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
