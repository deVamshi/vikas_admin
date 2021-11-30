import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";

import { Doughnut, defaults, Chart } from "react-chartjs-2";
import DataAboutList from "./data_about_list";
import "chartjs-plugin-doughnut-innertext";

defaults.plugins.legend.position = "right";

const boxShadowStyle = {
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.16)",
  paddingLeft: "0px !important",
  paddingRight: "0px !important",
};

const overviewData = {
  labels: [
    "Trade Pending",
    "Trade Confirmed",
    "Seller Booked",
    "Transportation to be Assigned",
    "Product to be Picked",
    "Produce Picked",
    "Produce in Transit",
    "Produce Delivered",
  ],
  legend: {
    display: false,
    position: "bottom",
    fullSize: false,
  },
  datasets: [
    {
      label: "# of Votes",
      data: [20, 20, 30, 20, 35, 20, 35, 30],
      backgroundColor: [
        "rgba(24, 87, 141, 1)",
        "rgba(26, 75, 132, 1)",
        "rgba(29, 63, 121, 1)",
        "rgba(134, 221, 212, 1)",
        "rgba(102, 197, 202, 1)",
      ],
    },
  ],
};

const data1 = {
  labels: ["Seller Only", "Buyer Only", "Seller + Buyer"],
  legend: {
    position: "right",
  },
  datasets: [
    {
      label: "# of Votes",
      data: [300, 250, 250],
      backgroundColor: [
        "rgba(81, 130, 108, 1)",
        "rgba(198, 178, 114, 1)",
        "rgba(51, 67, 76, 1)",
      ],
    },
  ],
  options: {
    plugins: {
      title: {
        display: true,
        text: "Total",
      },
    },
  },
};

const data2 = {
  labels: ["Ongoing", "Pending", "Completed"],
  legend: {
    position: "right",
  },
  datasets: [
    {
      label: "# of Votes",
      data: [180, 100, 340],
      backgroundColor: [
        "rgba(163, 67, 123, 1)",
        "rgba(237, 196, 54, 1)",
        "rgba(235, 111, 93, 1)",
        "rgba(163, 67, 123, 1)",
      ],
    },
  ],
};

const matchStatusData = {
  labels: ["Buyer to confirm", "Seller to confirm"],
  legend: {
    position: "right",
  },
  datasets: [
    {
      label: "# of Votes",
      data: [35, 35],
      backgroundColor: ["rgba(218, 76, 98, 1)", "rgba(231, 222, 212, 1)"],
    },
  ],
};

const halfData = {
  labels: [
    "Ongoing",
    "Pending",
    "Completed",
    "Ongoing",
    "Pending",
    "Completed",
    "Ongoing",
    "Pending",
    "Completed",
  ],
  legend: {
    display: false,
    position: "bottom",
    fullSize: false,
  },
  datasets: [
    {
      label: "# of Votes",
      data: [180, 100, 340, 180, 100, 340, 180, 100, 340],
      backgroundColor: [
        "rgba(163, 67, 123, 1)",
        "rgba(237, 196, 54, 1)",
        "rgba(235, 111, 93, 1)",
        "rgba(163, 67, 123, 1)",
        "rgba(163, 67, 123, 1)",
        "rgba(237, 196, 54, 1)",
        "rgba(235, 111, 93, 1)",
        "rgba(163, 67, 123, 1)",
      ],
    },
  ],
};

export default function Information() {
  function generateDonut(donutData: any) {
    return (
      <Doughnut
        data={donutData}
        width={130}
        height={130}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    );
  }

  return (
    <div>
      <Row gutter={[32, 32]} style={{ padding: "10px" }}>
        <Col span={24}>
          <Card style={boxShadowStyle} title="Live Transaction Overview">
            <Row align="middle">
              <Col span={6}>
                <Doughnut
                  data={overviewData}
                  width={130}
                  height={130}
                  options={{
                    plugins: {
                      title: {
                        padding: 1000,
                      },
                      legend: {
                        display: false,
                        align: "start",
                        title: {
                          text: `this`,
                        },
                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                        },
                      },
                    },
                    maintainAspectRatio: false,
                    rotation: -90,
                    circumference: 180,
                  }}
                />
              </Col>
              <Col span={6}>
                <DataAboutList />
              </Col>
              <Col span={6}>
                <DataAboutList />
              </Col>
              <Col span={6}>
                <DataAboutList />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="VB Users" style={boxShadowStyle}>
            <Row align="middle">
              <Col span={8}>{generateDonut(data1)}</Col>
              <Col span={16}>
                <DataAboutList />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Overview" style={boxShadowStyle}>
            <Row align="middle">
              <Col span={8}>{generateDonut(data2)}</Col>
              <Col span={16}>
                <DataAboutList />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Overview" style={boxShadowStyle}>
            <Row align="middle">
              <Col span={8}>{generateDonut(data1)}</Col>
              <Col span={16}>
                <DataAboutList />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={16}>
          <Card title="Total Transactiion Value" style={boxShadowStyle}>
            <Row align="middle">
              <Col span={8}>
                <Doughnut
                  data={halfData}
                  width={130}
                  height={130}
                  options={{
                    plugins: {
                      title: {
                        padding: 1000,
                      },
                      legend: {
                        display: false,

                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                        },
                      },
                    },
                    maintainAspectRatio: false,
                    rotation: -90,
                    circumference: 180,
                  }}
                />
              </Col>
              <Col span={8}>
                <DataAboutList />
              </Col>
              <Col span={8}>
                <DataAboutList />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Match Stats" style={boxShadowStyle}>
            <Row align="middle">
              <Col span={8}>
                <Doughnut
                  data={matchStatusData}
                  width={130}
                  height={130}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </Col>
              <Col span={16}>
                <DataAboutList />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
