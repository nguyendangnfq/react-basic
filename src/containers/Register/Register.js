import { Button, Form, Input, message, Select, Typography } from "antd";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Email, Nickname, Phone, Username } from "../../components";
import { GlobalDataContext } from "../../components/GlobalDataProvider";
import "./Register.scss";
import Password from "../../components/Password/Password";
import ConfirmPassword from "../../components/Password/ConfirmPassword";
const { Option } = Select;
const { Title } = Typography;

const Register = () => {
  const [form] = Form.useForm();
  const vals = useContext(GlobalDataContext);

  const navigate = useNavigate();
  const loading = vals.loading;
  const setLoading = vals.setLoading;
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="01">+01</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    if (
      vals.status === "200" ||
      vals.status === "201" ||
      vals.status === "204"
    ) {
      setTimeout(() => {
        message.success("Register Successfull!");
        console.log(JSON.stringify(values));
        form.resetFields();
        navigate("/");
      }, 2000);
      setLoading(true);
    } else {
      setTimeout(() => {
        message.error("Register Failed!");
      }, 2000);
      setLoading(true);
    }
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

            <Link to="/" className="login-link">
              Login Now
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
