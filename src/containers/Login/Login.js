import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, message, Typography } from "antd";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Username } from "../../components";
import { GlobalDataContext } from "../../components/GlobalDataProvider";
import "./Login.scss";
import Password from "../../components/Password/Password";
import userApi from "../../api/user";

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const { loading, setLoading, setToken, setUserInfo } =
    useContext(GlobalDataContext);
  const navigate = useNavigate();
  const saveToken = async (data) => {
    setLoading(true);
    try {
      const userInfo = await userApi.login(data);
      console.log(userInfo);
      setLoading(false);
      setToken(userInfo.token);
      setUserInfo(userInfo.role);
      message.success("Login successfull");
      localStorage.setItem("token", userInfo.token);
      navigate(`/${userInfo.id}`);
    } catch (error) {
      setLoading(false);
      message.error("Login Failed! Please try again later");
    }
  };

  const onFinish = (values) => {
    saveToken(values);
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
