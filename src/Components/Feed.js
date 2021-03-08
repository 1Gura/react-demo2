import React, { Component } from "react";
import Posts from "./Posts";
import Users from "./Users";

class Feed extends Component {
  componentDidMount() {}

  render() {
    let propsItem;
    if (this.props.posts === undefined || this.props.posts === null) {
      propsItem = [];
    } else {
      propsItem = this.props.posts;
    }
    return (
      <div className="container feed">
        <Posts
          postsStore={propsItem}
          unsplashBody={this.props.unsplashBody}
          newPosts={this.props.newPosts}
          clickLikePost={this.props.clickLikePost}
        />
        <Users postsStore={propsItem} user={this.props.user} />
      </div>
    );
  }
}

export default Feed;
