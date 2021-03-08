import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  render() {
    const { postsStore, newPosts, unsplashBody } = this.props;
    return (
      <div className="left">
        {postsStore.map((post, index) => {
          return (
            <Post
              clickPost={this.props.clickLikePost}
              post={post}
              key={post.id}
            />
          );
        })}
        <div className="button-update-container">
          <button
            className="button-update"
            onClick={() => newPosts(unsplashBody)}
          >
            Загрузить еще...
          </button>
        </div>
      </div>
    );
  }
}

export default Posts;
