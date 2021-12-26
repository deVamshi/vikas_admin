
import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Table, Typography, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CaretDownOutlined } from "@ant-design/icons";
import { getTransactionsDetails } from '../../store/slices/transactionSlice';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const { TabPane } = Tabs;
interface User {
    ID: string;
    Name: any;
    Type: string;
    Contact: string;
    Address: string;
}

const columns: ColumnsType<User> = [
    {
        title: "ID",
        dataIndex: "ID",
    },
    {
        title: 'Name',
        dataIndex: "Name",
    },
    {
        title: "Type",
        dataIndex: "Type"
    },
    {
        title: "Contact",
        dataIndex: "Contact",
        render: (Contact) => (
            <>
                {Contact.map((buy: any) => {

                    return (
                        <p key={buy}>
                            {buy}
                        </p>
                    );
                })}
            </>
        )
    },
    {
        title: "Address",
        dataIndex: "Address",
        render: (Address) => (
            <>
                {Address.map((buy: any) => {
                    return (
                        <p key={buy}>
                            {buy}
                        </p>
                    );
                })}
            </>
        )
    },
];
function App() {
    return (
        <div className="t">
            <Typography.Title level={4} className="title">Users</Typography.Title>
            <Space> </Space>
            <Tabs type="card" className="cardd" >
                <TabPane tab="Seller" key="1" >
                    <Table<User> columns={columns} pagination={false} scroll={{ x: 1350 }} />
                    <div className="transactions">
                        <a href="/" > View All Users</a>
                    </div>
                </TabPane>
                <TabPane tab="Buyer" key="2" >
                    <Table<User> columns={columns} style={{ width: 1300 }} pagination={false} scroll={{ x: 1350 }} />
                    <div className="transactions">
                        <a href="/" > View All Users</a>
                    </div>
                </TabPane>
            </Tabs>


        </div>

    );
}
export default App;
