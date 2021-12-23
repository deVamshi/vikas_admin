import { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';
import { Tabs, Typography } from 'antd';
import { Table, Tag, Space } from 'antd';
import { getMatchesDetails } from '../../store/slices/matchesSlice';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
const { TabPane } = Tabs;
interface User {
    ID: String;
    Produce: any;
    TransactionValue: PaymentCurrencyAmount;
    Quantity: String;
    SellerID: any;
    BuyerID: String;
    BuyerLocation: String;
    DaysSinceAdded: String;
    AskingDeliveryDate: String;
}
const columns: ColumnsType<User> = [
    {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
    },
    {
        title: 'Produce',
        dataIndex: 'Produce',
        key: 'Produce',
        width: '12%',
    },
    {
        title: 'Transaction Value',
        dataIndex: 'TransactionValue',
        key: 'TransactionValue',
        width: '12%',
    },
    {
        title: 'Quantity',
        key: 'Quantity',
        dataIndex: 'Quantity',
    },
    {
        title: 'Seller ID',
        key: 'SellerID',
        dataIndex: 'SellerID',
        render: (SellerID: Number) => <p style={{ color: "blue" }} >{SellerID}</p>,
    },
    {
        title: 'Buyer ID',
        key: 'BuyerID',
        dataIndex: 'BuyerID',
        render: (BuyerID: String) => <p style={{ color: "blue" }} >{BuyerID}</p>,

    },
    {
        title: 'Buyer Location',
        key: 'BuyerLocation',
        dataIndex: 'BuyerLocation'
    },
    {
        title: 'Days Since Added',
        key: 'DaysSinceAdded',
        dataIndex: 'DaysSinceAdded',
    },
    {
        title: 'Asking Delivery Date',
        key: 'AskingDeliveryDate',
        dataIndex: 'AskingDeliveryDate',
    },
];
export default function App() {
    const MatchesList = useSelector((state: RootState) => state.matches.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMatchesDetails())
    }, [])
    return (
        <div className="t">
            <Typography.Title level={4} className="title1">Current Matches</Typography.Title>
            <Space> </Space>
            <Tabs type="card" className="cardd">
                <TabPane tab="Seller Matches" key="1" className="seller">
                    <Table columns={columns} dataSource={MatchesList} pagination={false} scroll={{ x: 1800 }} />
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

