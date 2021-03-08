import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const configureStore = (preloadedState) =>
  createStore(
    rootReducer, //корневой редюсер
    preloadedState, // начальное состояние
    composeEnhancers(applyMiddleware())
  );

const store = configureStore({});

export default store;
