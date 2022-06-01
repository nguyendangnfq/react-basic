import { Form, Input } from "antd";
import React from "react";

const Password = (props) => {
  const { label, placeholder, prefix, hasFeedback } = props;
  return (
    <Form.Item
      name="password"
      label={label}
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
      hasFeedback={hasFeedback}
    >
      <Input.Password prefix={prefix} placeholder={placeholder} />
    </Form.Item>
  );
};

export default Password;
