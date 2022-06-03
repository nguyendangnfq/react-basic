import { Button, Space, Table, Tag, Typography } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { animalApi } from "../../api/animal";
import "./Setting.scss";
import { ModalPopUp } from "../../components";

const { Text } = Typography;

const Setting = () => {
  const [animals, setAnimals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    animalApi.getAniamal();
    animalApi.getAniamal().then((result) => {
      setAnimals(result);
      return result;
    });
  }, []);

  const handleClickEdit = (e) => {
    console.log(e);
  };

  const handleClickDelete = (e) => {
    console.log(e);
  };

  const handleViewModal = (e) => {
    console.log(e);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const data = animals.map((item, index) => {
    return {
      key: index,
      id: item.id,
      createdAt: moment(item.createdAt).format("MM/DD/YYYY HH:mm A"),
      name: item.name,
      type: item.type,
      age: item.age,
    };
  });
  console.log(data);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, data) => (
        <Text
          onClick={() => {
            handleViewModal(data);
          }}
        >
          {text}
        </Text>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      render: (type) => {
        let color = "";
        switch (type) {
          case "bear":
            color = "brown";
            break;
          case "insect":
            color = "green";
            break;
          case "dog":
            color = "violet";
            break;
          case "horse":
            color = "pink";
            break;
          case "crocodilia":
            color = "geekblue";
            break;
          case "snake":
            color = "yellow";
            break;
          case "cetacean":
            color = "purple";
            break;
          default:
            break;
        }
        return (
          <span>
            <Tag color={color} key={type}>
              {type.toUpperCase()}
            </Tag>
          </span>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, data) => (
        <Space size="middle">
          <Button type="primary" ghost onClick={() => handleClickEdit(data)}>
            Edit
          </Button>
          <Button
            danger
            onClick={() => {
              handleClickDelete(data);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="setting-ctn">
      <ModalPopUp
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        setIsModalVisible={setIsModalVisible}
      />
      <Table
        className="setting-ctn__table"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
      {/* <Button>Add</Button> */}
    </div>
  );
};

export default Setting;
