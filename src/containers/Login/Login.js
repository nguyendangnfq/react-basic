import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalDataContext } from "../../components/GlobalDataProvider";
import "./Login.scss";

const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const vals = useContext(GlobalDataContext);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const onFinish = (values) => {
    if (
      values.username === vals.userInfo.username &&
      values.password === vals.userInfo.password
    ) {
      setLoading(true);
      setTimeout(() => {
        message.success("Login successfull!");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        message.error("Login Failed!");
      }, 2000);
    }
  };
  return (
    <div className="login-ctn">
      <Form
        name="normal_login"
        className="login-ctn__login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Title className="login-ctn__login-form__form-title">Login</Title>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link to="/forgot-password" className="login-form-forgot">
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
