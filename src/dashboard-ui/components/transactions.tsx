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
  Status: any;
  Produce: string;
  TransactionValue: string;
  Quantity: string;
  SellerID: string;
  Buyer: any;
}

const columns: ColumnsType<User> = [
  {
    title: "ID",
    dataIndex: "ID",
  },
  {
    title: 'Status',
    dataIndex: "Status",
    render: (Status) => (
      <>
        {Status.map((tag: any, i: any, Status: any) => {
          let color: any = "black";
          if (tag === "Pending") {
            color = "#F6A041";
          }
          if (tag === "On Going") {
            color = "#12805C";
          }
          if (Status.length - 1 == i) {
            console.log("last element");
            return (
              <>
                <p style={(color = { color })} key={tag}>
                  {tag}
                </p>
                <a style={(color = { color })}>
                  {"Details"}
                  <CaretDownOutlined />
                </a>
              </>
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
    dataIndex: "Produce"
  },
  {
    title: "Transaction Value",
    dataIndex: "TransactionValue"
  },
  {
    title: "Quantity",
    dataIndex: "Quantity"
  },

  {
    title: "Seller ID",
    dataIndex: "SellerID",
    render: (SellerID: string) => (
      <p style={{ color: "blue" }} key={SellerID}>
        {SellerID}
      </p>

    )
  },
  {
    title: "Buyer",
    dataIndex: "Buyer",
    render: (Buyer) => (
      <>
        {Buyer.map((buy: any) => {

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
  const transactionsList = useSelector((state: RootState) => state.transactions.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionsDetails())
  }, [])
  return (
    <div className="t">
      <Typography.Title level={4} className="title">Live Transaction Details</Typography.Title>
      <Space> </Space>
      <Tabs type="card" className="cardd" >
        <TabPane tab="Seller Transactions" key="1" className="seller">
          <Table<User> columns={columns} dataSource={transactionsList} pagination={false} scroll={{ x: 1350 }} rowClassName={(record, index) => (record.Status[0] == "Pending" ? "rowClassName1" : "rowClassName2")} />
          <div className="transactions">
            <a href="/" > View All Transactions</a>
          </div>
        </TabPane>
        <TabPane tab="Buyer Transactions" key="2" className="buyer">
        </TabPane>
      </Tabs>
    </div>

  );
}
export default App;
