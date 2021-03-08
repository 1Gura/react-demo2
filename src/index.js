import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.scss";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import PostContainer from "./Containers/PostContainer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PostContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
