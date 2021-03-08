import { GET_UNSPLASH_BODY } from "../constants";

const unsplashBody = (state = {}, action) => {
  switch (action.type) {
    case GET_UNSPLASH_BODY:
      return action.body;
    default:
      return state;
  }
};
export default unsplashBody;
