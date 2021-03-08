import { combineReducers } from "redux";
import posts from "./posts";
import unsplashBody from "./unsplashBody";
import searchPosts from "./searchPosts";

const rootReducer = combineReducers({ posts, unsplashBody, searchPosts });

export default rootReducer;
