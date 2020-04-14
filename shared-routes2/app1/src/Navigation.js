import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => (
  <div style={{ border: "1px solid #000" }}>
    <Link to="/">Home</Link> - <Link to="/about">About</Link>
  </div>
);

export default Navigation;
