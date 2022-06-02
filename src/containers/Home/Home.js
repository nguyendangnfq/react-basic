import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>This is home page</h1>
      <Link to="/login">login</Link>
    </>
  );
};

export default Home;
