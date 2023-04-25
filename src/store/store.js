import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action) {
//     return next(action);
//   }
//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currState: ", store.getState());

//   next(action);
//   console.log("nextState: ", store.getState());
// };

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
); // it actually runs before an action hit the reducers ||  you dispatch the action and before an action hit the reducer then middleware come into play

// const middlewares = [loggerMiddleware];

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
// const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
// export const store = createStore(rootReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
