import { GET_USER_PROFILE } from "../constants";

const userProfile = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return action.user;
    default:
      return state;
  }
};
export default userProfile;
