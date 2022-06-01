import { Form, Input } from "antd";
import React from "react";

const Nickname = () => {
  return (
    <Form.Item
      name="nickname"
      label="Nickname"
      tooltip="What do you want others to call you?"
    >
      <Input />
    </Form.Item>
  );
};

export default Nickname;
