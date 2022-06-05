import { Button, Popconfirm, Space, Table, Tag, Typography } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { animalApi } from "../../api/animal";
import "./Setting.scss";
import { ModalPopUp, ModalEdit } from "../../components";

const { Text } = Typography;

const Setting = () => {
  const [animals, setAnimals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    animalApi.getAniamal();
    animalApi.getAniamal().then((result) => {
      setAnimals(result);
      return result;
    });
  }, []);

  // ----------Edit Animal----------->
  const handleClickEdit = (values) => {
    console.log(values);
    setIsVisible(true);
    // let editedAnimal = e.id;
    // let animalIndex = animals.findIndex((item) => item.id === editedAnimal);

    // if (animalIndex >= 1) {
    //   setAnimals(animals.splice(animalIndex, 1, editedAnimal));
    // }
  };

  // -------- Delete Animal --------->
  const handleClickDelete = (e) => {
    console.log(e.id);
    animalApi.deleteAniamal(e.id);
    setAnimals(animals.filter((item) => item.id !== e.id));
  };

  const handleOpenModal = (e) => {
    setIsModalVisible(true);
  };

  //------- Create New Animal ------->
  const handleCreate = (values) => {
    setIsModalVisible(false);

    console.log(values);
    const newData = {
      id: data.length + 1,
      name: values.name,
      age: values.age,
      type: values.type,
      createdAt: moment(values.createdAt).format("MM/DD/YYYY HH:mm A"),
    };

    const newAnimals = [...animals];
    newAnimals.push(newData);
    setAnimals(newAnimals);
    animalApi.postAniamal(newData);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsVisible(false);
  };

  const data = animals.map((item, index) => {
    return {
      key: index,
      createdAt: moment(item.createdAt).format("MM/DD/YYYY HH:mm A"),
      ...item,
    };
  });
  // console.log(data);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, data) => <Text>{text}</Text>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Created At",
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
          <Popconfirm
            title="Are you sure？"
            onConfirm={() => {
              handleClickDelete(data);
            }}
            onCancel={() => console.log("nothing")}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="setting-ctn">
      <ModalPopUp
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        onCreate={handleCreate}
        setIsModalVisible={setIsModalVisible}
      />
      <ModalEdit
        isVisible={isVisible}
        handleCancel={handleCancel}
        setIsVisible={setIsVisible}
        onCreate={handleClickEdit}
      />
      <Table
        className="setting-ctn__table"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
        footer={() => (
          <Button
            onClick={() => {
              handleOpenModal();
            }}
            style={{ width: "100%" }}
            type="primary"
          >
            Add
          </Button>
        )}
      />
    </div>
  );
};

export default Setting;
