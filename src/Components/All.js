import React, { Component } from "react";
import PhotoPreview from "./PhotoPreview";
import Load from "./Load";

class All extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.newPostsSearch("latest");
    this.props.flagChange();
  }

  componentWillUnmount() {
    this.props.flagChange();
  }

  render() {
    const { newSearchPosts, flagLoad } = this.props;
    try {
      return flagLoad ? (
        <Load />
      ) : (
        <div className="all">
          {newSearchPosts.map((post) => {
            return <PhotoPreview post={post} key={post.id} />;
          })}
        </div>
      );
    } catch (e) {
      return <h1>Произошла ошибка...</h1>;
    }
  }
}

export default All;
