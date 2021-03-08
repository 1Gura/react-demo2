import React from "react";

const User = (props) => {
  const { min, src, alt, name, link } = props;
  return (
    <a href={link} className={min ? "user min" : "user"}>
      <img src={src} alt={alt}></img>
      <div>{name}</div>
    </a>
  );
};

export default User;
