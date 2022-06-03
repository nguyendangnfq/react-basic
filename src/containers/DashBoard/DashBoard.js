import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalDataContext } from "../../components/GlobalDataProvider";

const DashBoard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { token, userInfo } = useContext(GlobalDataContext);
  const handleClick = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  const handleClickSetting = () => {
    navigate("/setting");
  };
  return (
    <>
      <Result
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
        icon={<SmileOutlined />}
        title="Welcome To DashBoard Page!"
        subTitle={`Role: ${userInfo}, Token: ${token}`}
        extra={[
          <Button type="primary" onClick={handleClick}>
            Logout
          </Button>,
          userInfo === "admin" && (
            <Button onClick={handleClickSetting}>Setting</Button>
          ),
        ]}
      />
    </>
  );
};

export default DashBoard;
