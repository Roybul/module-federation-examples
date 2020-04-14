import React from "react";

const style = {
  height: 400,
  backgroundImage: "url(https://i.picsum.photos/id/1025/1920/1080.jpg)",
  backgroundSize: "cover",
  color: "white",
  textShadow: "0 0 3px #000, 0 0 6px #000",
  padding: 12
};

const AboutPage = () => (
  <div style={style}>
    <h1>About Page</h1>
    <h2>We love dogs!</h2>
    <p>
      <em>a page being provided by App 2</em>
    </p>
  </div>
);

export default AboutPage;
