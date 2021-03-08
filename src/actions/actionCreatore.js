import {
  ADD_POSTS,
  CLICK_LIKE,
  GET_UNSPLASH_BODY,
  GET_POSTS,
  GET_SEARCH_POST,
} from "../constants";
import { toJson } from "unsplash-js";
export const postsFetchDataSuccess = (posts) => {
  return {
    type: ADD_POSTS,
    posts: [...posts],
  };
};
export const postsFetchData = (state, page) => {
  return (dispatch) => {
    state.photos
      .listPhotos(page, 10, "latest")
      .then(toJson)
      .then((posts) => dispatch(postsFetchDataSuccess(posts)));
  };
};

export const updateStore = (id, newPhoto, state) => {
  const newPosts = state.map((photo) => {
    let copyPhoto = { ...photo };
    if (copyPhoto.id === id) {
      copyPhoto = newPhoto;
    }
    return copyPhoto;
  });
  return {
    type: CLICK_LIKE,
    newPosts: newPosts,
  };
};

export const clickLike = (unsplash, id, posts) => {
  return (dispatch) => {
    let newArr = [];
    let photo = posts.find((photo) => photo.id === id);
    if (photo.liked_by_user === false) {
      unsplash.photos.likePhoto(id).then(() => {
        unsplash.photos
          .getPhoto(id)
          .then(toJson)
          .then((json) => dispatch(updateStore(id, json, posts)));
      });
      return newArr;
    } else {
      unsplash.photos.unlikePhoto(id).then(() => {
        unsplash.photos
          .getPhoto(id)
          .then(toJson)
          .then((json) => dispatch(updateStore(id, json, posts)));
      });
      return newArr;
    }
  };
};

export const getUnsplashBody = (unsplashBody) => {
  return {
    type: GET_UNSPLASH_BODY,
    body: unsplashBody,
  };
};

export const getPost = (unsplashBody) => {
  console.log(unsplashBody);
  return {
    type: GET_POSTS,
    body: unsplashBody,
  };
};

export const newPostsSearchFetchDataSuccess = (posts) => {
  return {
    type: GET_SEARCH_POST,
    posts,
  };
};

export const newPostsSearch = (request, key) => {
  if (request === "") {
    request = "random";
  }
  let url = `https://api.unsplash.com/search/photos?per_page=30&query=${request}&client_id=${key}`;
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((posts) => dispatch(newPostsSearchFetchDataSuccess(posts)));
  };
};
