import React from "react";
import { Table, Tag, Space, Row, Col } from "antd";

const OngoingActions = () => {
  const decideHtml = (text: string) => {
    if (text == "To be verified") {
      return;
    } else if (text == "Sent to Admin") {
    } else {
    }
  };

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const newData = [
    {
      key: "1",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "Sent to Admin",
    },
    {
      key: "2",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "Sent to Admin",
    },
    {
      key: "3",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "To be verified",
    },
    {
      key: "4",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "To be verified",
    },
    {
      key: "5",
      actionId: "A12345",
      category: "User",
      requestIssue: "Add User",
      buyer_seller_id: 12345,
      details: "Seller unable to login. Please reset",
      status: "To be resolved",
    },
  ];

  const columns = [
    {
      title: "Action ID",
      dataIndex: "actionId",
      key: "actionId",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Request/Issue",
      dataIndex: "requestIssue",
      key: "requestIssue",
    },
    {
      title: "Seller/Buyer ID",
      key: "buyer_seller_id",
      dataIndex: "buyer_seller_id",
      render: (id: any) => <a>{id}</a>,
    },
    {
      title: "Details",
      key: "details",
      dataIndex: "details",
      //   render: (text: any, record: any) => (
      //     <Space size="middle">
      //       <a>Invite {text}</a>
      //       <a>Delete</a>
      //     </Space>
      //   ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status: any, record: any) => (
        <Row>
          <Col span={6}>{status}</Col>
          <Col span={6}>{status}</Col>
        </Row>
      ),
    },
  ];
  return <Table columns={columns} dataSource={newData} />;
};

export default OngoingActions;
