import { Form, Input, Select } from "antd";
import React from "react";

const { Option } = Select;

const Phone = () => {
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

  return (
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
  );
};

export default Phone;
