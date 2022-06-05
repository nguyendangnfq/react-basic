import React from "react";
import { DatePicker, Form, Input, InputNumber, Modal, Select } from "antd";

const ModalPopUp = (props) => {
  const { isModalVisible, onCreate, handleCancel } = props;
  const [form] = Form.useForm();
  const { Option } = Select;

  const dateFormat = "YYYY/MM/DD";
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ age: "3" }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input the name of animal!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[
              { required: true, message: "Please input the type of animals" },
            ]}
          >
            <Select placeholder="Please select type of animal">
              <Option value="bear">Bear</Option>
              <Option value="insect">Insect</Option>
              <Option value="dog">Dog</Option>
              <Option value="horse">Horse</Option>
              <Option value="crocodilia">Crocodila</Option>
              <Option value="snake">Snake</Option>
              <Option value="cetacean">Cetacean</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="createdAt"
            label="Date of Born"
            rules={[
              { required: true, message: "Please input the date of born!" },
            ]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: "Please input the age of animal!",
              },
            ]}
          >
            <InputNumber min={"1"} max={"100"} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalPopUp;
