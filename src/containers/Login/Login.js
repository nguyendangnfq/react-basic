import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message, Typography } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Username } from "../../components";
import { GlobalDataContext } from "../../components/GlobalDataProvider";
import "./Login.scss";
import Password from "../../components/Password/Password";

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const vals = useContext(GlobalDataContext);

  const loading = vals.loading;
  const setLoading = vals.setLoading;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const onFinish = (values) => {
    console.log(values);
    if (
      values.username === vals.userInfo.username &&
      values.password === vals.userInfo.password
    ) {
      setLoading(true);
      setTimeout(() => {
        message.success("Login successfull!");
        form.resetFields();
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        message.error("Login failed! Try again later");
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
        form={form}
      >
        <Title className="login-ctn__login-form__form-title">Login</Title>

        <Username
          label={""}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />

        <Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
          hasFeedback={null}
        />

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
