import { DatePicker, Form, Input, InputNumber, Modal, Select } from "antd";
import moment from "moment";
import React, { useEffect } from "react";

const ModalEdit = (props) => {
  const { isVisible, handleCancel, onCreate, updatedAnimal } = props;
  const [form] = Form.useForm();
  const { Option } = Select;

  // console.log(updatedAnimal);

  useEffect(() => {
    form.setFieldsValue({
      name: updatedAnimal.name,
      type: updatedAnimal.type,
      createdAt: moment(updatedAnimal.createdAt),
      age: updatedAnimal.age,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatedAnimal]);
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate({ ...values, id: updatedAnimal.id });
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
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
            <DatePicker />
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

export default ModalEdit;
