import React from "react";

import { Tabs } from "antd";
import OngoingActions from "./ongoing_actions";

const { TabPane } = Tabs;

const ActionsUI = () => {
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
        <TabPane tab="On Going Actions" key="1">
          <OngoingActions />
        </TabPane>
        <TabPane tab="Completed Actions" key="2">
          <div style={{ border: "2px blue" }}>tab 2</div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ActionsUI;
