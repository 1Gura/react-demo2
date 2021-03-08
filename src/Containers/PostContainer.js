import React, { Component } from "react";
import Header from "../Components/Header";
import Feed from "../Components/Feed";
import All from "../Components/All";
import Photo from "../Components/Photo";
import Footer from "../Components/Footer";
import { connect } from "react-redux";
import Unsplash, { toJson } from "unsplash-js";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import {
  clickLike,
  getPost,
  getUnsplashBody,
  newPostsSearch,
  postsFetchData,
} from "../actions/actionCreatore";
import Load from "../Components/Load";

const unsplash = new Unsplash({
  accessKey: "AjdqGNN2J3YljxoQKuDTucL8mCkxqv-hLhRMpMO3PSg",
  secret: "XhyISIZuair3TxDrjB8WBGaVf6uLgpkgxaDCuf39rZc",
  //callbackUrl: "http://localhost:3000/react-demo/",
  callbackUrl: "https://sugarboy228.github.io/react-demo/",
});
const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
  "write_followers",
  "read_collections",
  "write_collections",
]);

class PostContainer extends Component {
  state = {
    error: false,
    numberOfPhotos: 10,
    page: 1,
    inputString: "",
    inputFlag: false,
    flagLoad: false,
  };

  componentDidMount() {
    const code = window.location.search.split("code=")[1];
    if (code) {
      unsplash.auth
        .userAuthentication(code)
        .then(toJson)
        .then((json) => {
          unsplash.auth.setBearerToken(json.access_token);
          this.props.getUnsplash(unsplash);
          unsplash.photos
            .likePhoto("54IBPwvLf3s")
            .then(toJson)
            .then((json) => {
              this.setState({
                userProfile: json.user,
              });
            });
          this.props.fetchData(unsplash, this.state.page);
        });
    } else {
      window.location.assign(authenticationUrl);
    }
  }

  like = (id) => {
    const { unsplashBody, posts, searchPosts } = this.props;
    const allPosts = [...posts, ...searchPosts];
    this.props.clickPost(unsplashBody, id, allPosts);
  };

  newPosts = () => {
    let { page } = this.state;
    this.setState({
      page: ++page,
    });
    const { unsplashBody } = this.props;
    this.props.fetchData(unsplashBody, page);
  };

  changeInputSearch = (event) => {
    const inputString = event.target.value;
    this.setState({
      inputString: inputString,
    });
  };

  searchInit = (event, request) => {
    if (event.keyCode === 13 || event.type === "click") {
      this.setState({
        flagLoad: true,
      });
      this.newPostsSearchContainer(request);
      this.setState({
        inputString: "",
        flagLoad: false,
      });
    }
  };

  flagChange = () => {
    if (window.location.pathname.includes("all")) {
      this.setState({
        inputFlag: true,
      });
    } else {
      this.setState({
        inputFlag: false,
      });
    }
  };

  newPostsSearchContainer = (request) => {
    this.props.newPostsSearch(request, unsplash._accessKey);
  };

  render() {
    const { posts, searchPosts } = this.props;
    return (
      <BrowserRouter>
        <div className="app">
          <Header
            flag={this.state.inputFlag}
            searchInit={this.searchInit}
            inputString={this.state.inputString}
            changeInputSearch={this.changeInputSearch}
          />
          <Route
            path="/react-demo/"
            exact
            render={() =>
              posts.length === 0 ? (
                <Load />
              ) : (
                <Feed
                  user={this.state.userProfile}
                  posts={posts}
                  clickLikePost={this.like}
                  newPosts={this.newPosts}
                />
              )
            }
          />
          <Route
            path="/react-demo/:id"
            exact
            render={({ match }) => {
              const { id } = match.params;
              if (id === "all") {
                return (
                  <All
                    flagLoad={this.state.flagLoad}
                    newPostsSearch={this.newPostsSearchContainer}
                    inputFlag={this.state.inputFlag}
                    flagChange={this.flagChange}
                    key={unsplash.accessKey}
                    newSearchPosts={searchPosts}
                    newSearchPostFunc={this.newPostsSearchContainer}
                  />
                );
              } else if (id === "react-demo") {
                return posts.length > 0 ? (
                  <Redirect to="/react-demo/" />
                ) : (
                  <Load />
                );
              } else if (id.length > 0) {
                return (
                  <Photo
                    photosSearch={searchPosts}
                    clickLikePost={this.like}
                    photos={posts}
                    photoId={id}
                  />
                );
              } else {
                return (
                  <Feed
                    user={this.state.userProfile}
                    posts={posts}
                    clickLikePost={this.like}
                    newPosts={this.newPosts}
                  />
                );
              }
            }}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    searchPosts: state.searchPosts,
    unsplashBody: state.unsplashBody,
    userProfile: state.userProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (unsplash, page) => dispatch(postsFetchData(unsplash, page)),
    clickPost: (unsplash, id, posts) =>
      dispatch(clickLike(unsplash, id, posts)),
    getUnsplash: (body) => dispatch(getUnsplashBody(body)),
    newPostsSearch: (request, key) => dispatch(newPostsSearch(request, key)),
    postGet: () => dispatch(getPost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
