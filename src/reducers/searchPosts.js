import { GET_SEARCH_POST } from "../constants";

const searchPosts = (state = [], action) => {
  switch (action.type) {
    case GET_SEARCH_POST:
      return [...action.posts.results];
    default:
      return state;
  }
};
export default searchPosts;
