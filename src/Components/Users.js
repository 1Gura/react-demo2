import React from "react";
import User from "./User";

const Users = (props) => {
  const { user, postsStore } = props;
  let users = [];
  if (postsStore.length > 0) {
    for (let i = 0; i < 4; i++) {
      users.push(postsStore[i].user);
    }
  }
  try {
    return (
      <div className="right">
        <User
          src={user.profile_image.medium}
          link={user.links.html}
          alt="Men"
          name={user.username}
        />
        <div className="users__block">
          {users.map((user, index) => {
            return (
              <User
                src={user.profile_image.medium}
                alt="user"
                key={index}
                name={user.username}
                link={user.links.html}
                min
              />
            );
          })}
        </div>
      </div>
    );
  } catch (e) {
    return (
      <div className="right">
        <h1>загрузка...</h1>
      </div>
    );
  }
};

export default Users;
