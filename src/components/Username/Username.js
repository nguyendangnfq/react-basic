import { Form, Input } from "antd";
import React from "react";

const Username = (props) => {
  const { prefix, label, placeholder } = props;
  return (
    <Form.Item
      name="username"
      label={label}
      rules={[
        {
          required: true,
          message: "Please input your username!",
        },
      ]}
    >
      <Input prefix={prefix} placeholder={placeholder} />
    </Form.Item>
  );
};

export default Username;
