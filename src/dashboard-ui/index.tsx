import React from "react";
// import "./styles.css";
import Information from "./components/information";
import { Tabs } from "antd";
import ActionsUI from "./components/actions_ui";
import Transactions from "./components/transactions";
import Matches from "./components/matches";
const { TabPane } = Tabs;
const Dashboard = () => {
  return (
    <div>
        <Tabs
          defaultActiveKey="1"
          type="card"
          style={{
            marginTop: "50px",
            padding: "50px 75px",
          }}
        >
          <TabPane tab="Information" key="1">
            <Information />
          </TabPane>
          <TabPane tab="Actions" key="2" className="custom">
            <ActionsUI />
          </TabPane>
        </Tabs>
        <Transactions />
        <Matches />
    </div>
  );
};

export default Dashboard;
