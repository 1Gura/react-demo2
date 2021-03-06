import React from "react";
import User from "./User";

const Photo = (props) => {
  try {
    let newDate = "";
    const createDate = (date) => {
      for (let i = 0; i < date.length; i++) {
        if (date[i] !== "T") {
          newDate = newDate + date[i];
        } else {
          break;
        }
      }
    };

    const { photos, photoId, clickLikePost, photosSearch } = props;
    let photo = null;
    photos.forEach((item) => {
      if (item.id === photoId) {
        photo = item;
      }
    });
    if (photo === null) {
      photosSearch.forEach((item) => {
        if (item.id === photoId) {
          photo = item;
        }
      });
    }
    const {
      id,
      urls,
      user,
      alt_description,
      liked_by_user,
      created_at,
      likes,
      links,
    } = photo;
    const { username, bio, profile_image } = user;
    const { medium } = profile_image;
    const { full } = urls;
    const { html } = links;
    createDate(created_at);

    return (
      <div className="photo-container">
        <div className="photo">
          <div>
            <img
              onClick={(event) => {
                window.history.back();
              }}
              className="btn-back"
              src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png"
              alt="назад"
            />
          </div>
          <div className="photo-img">
            <img src={full} alt={alt_description} />
          </div>
          <div className="post__info">
            <User
              src={medium}
              alt={alt_description}
              name={username}
              link={html}
              min
            />
            <div className="bar">
              <div className="post__container-like">
                {liked_by_user ? (
                  <svg
                    className="svg-icon"
                    onClick={() => clickLikePost(id)}
                    aria-label="Не нравится"
                    viewBox="0 0 48 48"
                  >
                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                  </svg>
                ) : (
                  <svg
                    onClick={() => clickLikePost(id)}
                    aria-label="Нравится"
                    className="bar-like svg-icon"
                    viewBox="0 0 48 48"
                  >
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                  </svg>
                )}
                <span>{likes}</span>
              </div>
            </div>
            <div className="post__name">{username}</div>
            <div className="post__descry">{bio}</div>
            <div className="post__date">Дата добавления поста: {newDate}</div>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    return <div className="photo-container"></div>;
  } finally {
  }
};

export default Photo;
