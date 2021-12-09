import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';
import { Tabs, Typography } from 'antd';
import { Table, Tag, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
const { TabPane } = Tabs;
interface User {
    id: string;
    produce: any;
    transactionvalue: PaymentCurrencyAmount;
    quantity: string;
    sellerid: any;
    buyerid: number;
    buyerlocation: string;
    dayssinceadded: number;
    askingdelivery: Date;
}
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Produce',
        dataIndex: 'produce',
        key: 'produce',
        width: '12%',
    },
    {
        title: 'Transaction Value',
        dataIndex: 'transactionvalue',
        key: 'transactionvalue',
        width: '12%',
    },
    {
        title: 'Quantity',
        key: 'quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Seller ID',
        key: 'sellerid',
        dataIndex: 'sellerid',
        render: (sellerid: Number) => <p style={{ color: "blue" }} >{sellerid}</p>,
    },
    {
        title: 'Buyer ID',
        key: 'buyerid',
        dataIndex: 'buyerid',
        render: (buyerid: Number) => <p style={{ color: "blue" }} >{buyerid}</p>,

    },
    {
        title: 'Buyer Location',
        key: 'buyerlocation',
        dataIndex: 'buyerlocation'
    },
    {
        title: 'Days Since Added',
        key: 'dayssinceadded',
        dataIndex: 'dayssinceadded',
    },
    {
        title: 'Asking Delivery',
        key: 'askingdelivery',
        dataIndex: 'askingdelivery',
    },
];

const data = [
    {
        key: '1',
        id: 'M12345',
        produce: 'produce-variety-grade',
        transactionvalue: '₹41,000',
        quantity: '20qtl',
        sellerid: '12345',
        buyerid: '67890',
        buyerlocation: 'mandya',
        dayssinceadded: '2',
        askingdelivery: '29/11/2020',
    },
    {
        key: '2',
        id: 'M12345',
        produce: 'produce-variety-grade',
        transactionvalue: '₹41,000',
        quantity: '20qtl',
        sellerid: '12345',
        buyerid: '67890',
        buyerlocation: 'mandya',
        dayssinceadded: '2',
        askingdelivery: '29/11/2020',

    },
    {
        key: '3',
        id: 'M12345',
        produce: 'produce-variety-grade',
        transactionvalue: '₹41,000',
        quantity: '20qtl',
        sellerid: '12345',
        buyerid: '67890',
        buyerlocation: 'mandya',
        dayssinceadded: '2',
        askingdelivery: '29/11/2020',

    },
    {
        key: '4',
        id: 'M12345',
        produce: 'produce-variety-grade',
        transactionvalue: '₹41,000',
        quantity: '20qtl',
        sellerid: '12345',
        buyerid: '67890',
        buyerlocation: 'mandya',
        dayssinceadded: '2',
        askingdelivery: '29/11/2020',
    },
    {
        key: '5',
        id: 'M12345',
        produce: 'produce-variety-grade',
        transactionvalue: '₹41,000',
        quantity: '20qtl',
        sellerid: '12345',
        buyerid: '67890',
        buyerlocation: 'mandya',
        dayssinceadded: '2',
        askingdelivery: '29/11/2020',
    },
];

export default function App() {
    return (
        <div className="t">
            <Typography.Title level={4} className="title1">Current Matches</Typography.Title>
            <Space> </Space>
            <Tabs type="card" className="cardd">
                <TabPane tab="Seller Matches" key="1" className="seller">
                    <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 1800 }} />
                    <div className="transactions">
                        <a href="/">View all Matches</a>
                    </div>
                </TabPane>
                <TabPane tab="Buyer Matches" key="2" className="buyer">
                </TabPane>
            </Tabs>
        </div>
    )
}

