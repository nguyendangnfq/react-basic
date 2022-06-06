import { HomeOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Result
        className="home__result"
        icon={<HomeOutlined />}
        title="WELCOME TO HOME PAGE!"
        extra={
          <Button>
            {" "}
            <Link to="/login">Login</Link>
          </Button>
        }
      />
    </div>
  );
};

export default Home;
