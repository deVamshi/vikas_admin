import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';
import { Tabs, Table, Typography, Space, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CaretDownOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
interface User {
    id: string;
    tags: any;
    produce: string;
    tvalue: string;
    quantity: string;
    sids: string;
    buyer: any;
    /*
    tinfo: any;
    addcost: string;
    */
}

const columns: ColumnsType<User> = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Status",
        dataIndex: "tags",
        render: (tags) => (
            <>
                {tags.map((tag: any) => {
                    let color: any = "black";
                    if (tag === "Pending") {
                        color = "#F6A041";
                    }
                    if (tag === "On Going") {
                        color = "#12805C";
                    }
                    if (tag === "Details") {
                        color = "#4285F4";
                        return (
                            <p style={(color = { color })} key={tag}>
                                {tag}
                                <CaretDownOutlined />
                            </p>
                        );
                    }
                    return (
                        <p style={(color = { color })} key={tag}>
                            {tag}
                        </p>
                    );
                })}
            </>
        )
    },
    {
        title: "Produce",
        dataIndex: "produce"
    },
    {
        title: "Transaction Value",
        dataIndex: "tvalue"
    },
    {
        title: "Quantity",
        dataIndex: "quantity"
    },

    {
        title: "Seller ID",
        dataIndex: "sids",
        render: (sids: string) => (
            <p style={{ color: "blue" }} key={sids}>
                {sids}
            </p>

        )
    },
    {
        title: "Buyer",
        dataIndex: "buyer",
        render: (buyer) => (
            <>
                {buyer.map((buy: any) => {
                    return (
                        <p key={buy}>
                            {buy}
                        </p>
                    );
                })}
            </>
        )
    },
    /*
    {
      title: "Transaction Info",
      dataIndex: "tinfo",
      render: (tinfo) => (
        <>
          {tinfo.map((ad: any) => {
            return (
              <p key={ad}>
                {ad}
              </p>
            );
          })}
        </>
      )
    },
    {
      title: "Additional Cost",
      dataIndex: "addcost",
  
    }
    */
];

const data: User[] = [
    {
        id: "T12345",
        tags: ["Pending", "Seller Accepted", "Details"],
        produce: "Produce-Verity-Grade",
        tvalue: "₹41,000",
        quantity: "20 qtl",
        sids: "12345",
        buyer: ["67890", "Mandya"],
        /*
        tinfo: ["-"],
        addcost: "-"
        */
    },
    {
        id: "T12345",
        tags: ["Pending", "Seller Accepted", "Details"],
        produce: "Produce-Verity-Grade",
        tvalue: "₹41,000",
        quantity: "20 qtl",
        sids: "12345",
        buyer: ["67890", "Mandya"],
        /*
        tinfo: ["-"],
        addcost: "-"
        */
    },
    {
        id: "T12345",
        tags: ["On Going", "Produce Booked", "Details"],
        produce: "Produce-Verity-Grade",
        tvalue: "₹41,000",
        quantity: "20 qtl",
        sids: "12345",
        buyer: ["67890", "Mandya"],
        /*
        tinfo: ["-"],
        addcost: "Transportation",
        */

    },
    {
        id: "T12345",
        tags: ["On Going", "Transporter Assigned", "Details"],
        produce: "Produce-Verity-Grade",
        tvalue: "₹41,000",
        quantity: "20 qtl",
        sids: "12345",
        buyer: ["67890", "Mandya"],
        /*
        tinfo: ["Transportation", "Details"],
        addcost: "-",
        */
    },
];
function App() {
    return (
        <>
            <Typography.Title level={4} className="title">Live Transaction Details</Typography.Title>
            <Space> </Space>
            <Tabs type="card" className="cardd" >
                <TabPane tab="Seller Transactions" key="1" className="seller">
                    <Table<User> columns={columns} dataSource={data} pagination={false} scroll={{ x: 1350 }} rowClassName={(record, index) => (record.tags[0] == "Pending" ? "rowClassName1" : "rowClassName2")} />
                    <div className="transactions">
                        <a href="/" > View All Transactions</a>
                    </div>
                </TabPane>
                <TabPane tab="Buyer Transactions" key="2" className="buyer">
                </TabPane>
            </Tabs>
        </>

    );
}



export default App;
