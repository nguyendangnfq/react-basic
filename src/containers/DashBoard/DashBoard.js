import { Button } from "antd";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalDataContext } from "../../components/GlobalDataProvider";

const DashBoard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { token, userInfo } = useContext(GlobalDataContext);
  const handleClick = () => {
    navigate("/");
    localStorage.removeItem("token");
  };
  return (
    <>
      <h1>This is DashBoard</h1>
      <p>{token}</p>
      <h2>{params.id}</h2>
      <Button onClick={handleClick}>Logout</Button>
      {userInfo === "admin" && <Link to="/setting">Setting</Link>}
    </>
  );
};

export default DashBoard;
