import { Form, Input } from "antd";
import React from "react";

const Email = () => {
  return (
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
  );
};

export default Email;
