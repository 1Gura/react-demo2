import { ADD_POSTS, CLICK_LIKE } from "../constants";

const posts = (state = [], action) => {
  switch (action.type) {
    case ADD_POSTS:
      return [...state, ...action.posts];
    case CLICK_LIKE:
      return action.newPosts;
    default:
      return state;
  }
};
export default posts;
