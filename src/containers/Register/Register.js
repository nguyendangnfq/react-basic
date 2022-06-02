import { Button, Form, Input, message, Select, Typography } from "antd";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Email, Nickname, Phone, Username } from "../../components";
import { GlobalDataContext } from "../../components/GlobalDataProvider";
import "./Register.scss";
import Password from "../../components/Password/Password";
import ConfirmPassword from "../../components/Password/ConfirmPassword";
import userApi from "../../api/user";
const { Option } = Select;
const { Title } = Typography;

const Register = () => {
  const [form] = Form.useForm();
  const { loading, setLoading } = useContext(GlobalDataContext);

  const navigate = useNavigate();

  const handleRegister = async (values) => {
    const status = await userApi.register();
    const name = "status";
    console.log(status[name]);
    if (
      status[name] === "200" ||
      status[name] === "201" ||
      status[name] === "204"
    ) {
      form.resetFields();
      message.success("Register Successfull!");
      console.log(JSON.stringify(values));
      setLoading(false);
      navigate("/");
    } else {
      message.error("Register Failed!");
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    setLoading(true);
    handleRegister(values);
  };

  return (
    <div className="register-ctn">
      <div className="register-ctn__register-form">
        <Form
          layout={"vertical"}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: "84",
          }}
          scrollToFirstError
        >
          <Title className="register-ctn__register-form__form-title">
            Register
          </Title>

          <Email />

          <Username label="Username" />

          <Password label="Password" hasFeedback="hasFeedback" />

          <ConfirmPassword />

          <Nickname />

          <Phone />

          <Form.Item className="register-ctn__register-form__btn-ctn">
            <Button type="primary" htmlType="submit" loading={loading}>
              Register
            </Button>

            <Link to="/login" className="login-link">
              Login Now
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
