import React, { Component } from "react";
import { Link } from "react-router-dom";

class PhotoPreview extends Component {
  render() {
    const { alt_description, urls } = this.props.post;
    const { full } = urls;
    return (
      <div className="photo-preview">
        <Link to={this.props.post.id}>
          <img className="photo-cover" src={full} alt={alt_description} />
        </Link>
      </div>
    );
  }
}

export default PhotoPreview;
