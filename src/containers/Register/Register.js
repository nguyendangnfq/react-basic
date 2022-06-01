import { Button, Form, Input, message, Select, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalDataContext } from "../../components/GlobalDataProvider";
import "./Register.scss";
const { Option } = Select;
const { Title } = Typography;

const Register = () => {
  const [form] = Form.useForm();
  const vals = useContext(GlobalDataContext);
  const [loading, setLoading] = useState(false);
  console.log(vals);
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
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

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
