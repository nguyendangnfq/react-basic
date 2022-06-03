import React, { useState } from "react";
import { Modal, Typography } from "antd";

const { Title, Text } = Typography;
const ModalPopUp = (props) => {
  const [value, setValue] = useState("");
  const { isModalVisible, handleOk, handleCancel } = props;

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Title>Com cho</Title>
        <Text>Some contents...</Text>
        <Text>Some contents...</Text>
      </Modal>
    </>
  );
};

export default ModalPopUp;
