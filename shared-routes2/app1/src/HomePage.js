import React from "react";

const style = {
  height: 400,
  backgroundImage: "url(https://i.picsum.photos/id/324/1920/1080.jpg)",
  backgroundSize: "cover",
  color: "white",
  textShadow: "0 0 3px #000, 0 0 6px #000",
  padding: 12
};

const HomePage = () => (
  <div style={style}>
    <h1>Home Page</h1>
    <h2>Welcome to the future!</h2>
    <p>
      <em>a page being provided by App 1</em>
    </p>
  </div>
);

export default HomePage;
