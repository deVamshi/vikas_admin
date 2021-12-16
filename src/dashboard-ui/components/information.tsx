import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Select, Typography } from "antd";
import "antd/dist/antd.css";
import { RootState } from "../../store";
import { Doughnut, defaults, Chart } from "react-chartjs-2";
import DataAboutList from "./data_about_list";
import "chartjs-plugin-doughnut-innertext";
import { getDashboardData } from "../../store/slices/dashboardSlice";
import { useEffect, useState } from "react";

const { Link } = Typography;
defaults.plugins.legend.position = "right";

const { Option } = Select;

const boxShadowStyle = {
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.16)",
  paddingLeft: "0px !important",
  paddingRight: "0px !important",
};

const counter = {
  id: "counter",
  beforeDraw(chart: any, args: any, options: any) {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
    } = chart;
    ctx.save();
    ctx.font = "15px Roboto";
    ctx.textAlign = "center";
    console.log(width / 2);
    ctx.font = "12px Roboto";
    ctx.color = "black";
    ctx.fillText("Total", width / 2, top + height / 2 - 10);
    ctx.font = "20px Roboto";
    ctx.fontStyle = "bold";
    ctx.fontWeight = "600";
    ctx.fillText("240", width / 2, top + height / 2 + 10);
  },
};

const counter1 = {
  id: "counter1",
  beforeDraw(chart: any, args: any, options: any) {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
    } = chart;
    ctx.save();
    ctx.font = "12px Roboto";
    ctx.textAlign = "center";
    ctx.color = "black";
    ctx.fillText("Total", width / 2, top + height / 2 + 30);
    ctx.font = "20px Roboto";
    ctx.fontStyle = "bold";
    ctx.fontWeight = "600";
    ctx.fillText("240", width / 2, top + height / 2 + 50);
    //x0=starting point on the horizontal level l/r
    //y0=starting point on the vertical level t/b
    //x1=length of the shape in pixel horizontal level
    //y1=length of the shape in pixel vertical level
  },
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
  plugins: [counter],
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
  const dashboardData = useSelector((state: RootState) => state.dashboard.data);
  const [transactionOverview, settransactionOverview] = useState({
    labels: [],
    values: [],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  useEffect(() => {
    const newLabels: any = [];
    const newValues: any = [];
    dashboardData.liveTransactionValue.map((item) => {
      newLabels.push(item["legend"]);
      newValues.push(item["value"]);
    });
    settransactionOverview({ labels: newLabels, values: newValues });
  }, [dashboardData]);

  console.log("Buildddddddddddddddddddddddddddddddddd");

  const overviewData = {
    labels: transactionOverview.labels,
    legend: {
      display: false,
      position: "bottom",
      fullSize: false,
    },
    datasets: [
      {
        label: "# of Votes",
        data: transactionOverview.values,
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

  function generateDonut(donutData: any) {
    return (
      <Doughnut
        data={donutData}
        width={130}
        height={130}
        plugins={[counter]}
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
          <Card
            style={boxShadowStyle}
            title="Live Transaction Overview"
            extra={
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={(value) => console.log(`selected ${value}`)}
              >
                <Option value="jack">All</Option>
                <Option value="lucy">Pending</Option>
                <Option value="disabled">Completed</Option>
                <Option value="Yiminghe">Booked</Option>
              </Select>
            }
          >
            <Row align="middle">
              <Col span={6}>
                <Doughnut
                  data={overviewData}
                  width={130}
                  height={130}
                  plugins={[counter1]}
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
                <DataAboutList
                  data={[
                    {
                      legend: "Trade Pending",
                      value: 34,
                      background: "#18578D",
                    },

                    {
                      legend: "Trade Confirmed",
                      value: 39,
                      background: "#18578D",
                    },
                    {
                      legend: "Seller Booked",
                      value: 39,
                      background: "#18578D",
                    },
                  ]}
                />
              </Col>
              <Col span={6}>
                <DataAboutList
                  data={[
                    {
                      legend: "Transportation to be Assigned",
                      value: 34,
                      background: "#18578D",
                    },
                    {
                      legend: "Transportation Assigned",
                      value: 39,
                      background: "#86DDD4",
                    },
                    {
                      legend: "Produce to be Picked",
                      value: 39,
                      background: "#66C5CA",
                    },
                  ]}
                />
              </Col>
              <Col span={6}>
                <DataAboutList
                  data={[
                    {
                      legend: "Produce Picked",
                      value: 34,
                      background: "#18578D",
                    },
                    {
                      legend: "Produce in Transit",
                      value: 39,
                      background: "#57B9C4",
                    },
                    {
                      legend: "Produce Delivered",
                      value: 39,
                      background: "#49ADBF",
                    },
                  ]}
                />
              </Col>
            </Row>
            <Link style={{ float: "right" }}>View Details</Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="VB Users"
            style={boxShadowStyle}
            extra={
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={(value) => console.log(`selected ${value}`)}
              >
                <Option value="jack">Buyers</Option>
                <Option value="lucy">Sellers</Option>
                <Option value="disabled">All</Option>
              </Select>
            }
          >
            <Row align="middle">
              <Col span={8}>{generateDonut(data1)}</Col>
              <Col span={16}>
                <DataAboutList
                  data={[
                    { legend: "Seller Only", value: 34, background: "#51826C" },
                    { legend: "Buyer Only", value: 39, background: "#C6B272" },
                    {
                      legend: "Seller + Buyer",
                      value: 39,
                      background: "#33434C",
                    },
                  ]}
                />
              </Col>
            </Row>
            <Link style={{ float: "right" }}>View Details</Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title="Overview"
            style={boxShadowStyle}
            extra={
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={(value) => console.log(`selected ${value}`)}
              >
                <Option value="jack">All</Option>
                <Option value="lucy">Pending</Option>
                <Option value="disabled">Completed</Option>
                <Option value="Yiminghe">Booked</Option>
              </Select>
            }
          >
            <Row align="middle">
              <Col span={8}>{generateDonut(data2)}</Col>
              <Col span={16}>
                <DataAboutList
                  data={[
                    { legend: "On Going", value: 34, background: "#A3437B" },
                    { legend: "Pending", value: 39, background: "#EDC436" },
                    { legend: "Completed", value: 39, background: "#EB6F5D" },
                  ]}
                />
              </Col>
            </Row>
            <Link style={{ float: "right" }}>View Details</Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Overview"
            style={boxShadowStyle}
            extra={
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={(value) => console.log(`selected ${value}`)}
              >
                <Option value="jack">All</Option>
                <Option value="lucy">Pending</Option>
                <Option value="disabled">Completed</Option>
                <Option value="Yiminghe">Booked</Option>
              </Select>
            }
          >
            <Row align="middle">
              <Col span={8}>{generateDonut(data1)}</Col>
              <Col span={16}>
                <DataAboutList
                  data={[
                    { legend: "Yes", value: 34, background: "#496CCE" },
                    { legend: "No", value: 39, background: "#D9E4ED" },
                  ]}
                />
              </Col>
            </Row>
            <Link style={{ float: "right" }}>View Details</Link>
          </Card>
        </Col>
        <Col span={16}>
          <Card
            title="Total Transactiion Value"
            style={boxShadowStyle}
            extra={
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={(value) => console.log(`selected ${value}`)}
              >
                <Option value="jack">All</Option>
                <Option value="lucy">Pending</Option>
                <Option value="disabled">Completed</Option>
                <Option value="Yiminghe">Booked</Option>
              </Select>
            }
          >
            <Row align="middle">
              <Col span={8}>
                <Doughnut
                  data={halfData}
                  width={130}
                  height={130}
                  plugins={[counter1]}
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
                <DataAboutList
                  data={[
                    {
                      legend: "Produce Type A",
                      value: 34,
                      background: "#A3437B",
                    },
                    {
                      legend: "Produce Type B",
                      value: 39,
                      background: "#F27E54",
                    },
                    {
                      legend: "Produce Type C",
                      value: 39,
                      background: "#F6A041",
                    },
                  ]}
                />
              </Col>
              <Col span={8}>
                <DataAboutList
                  data={[
                    {
                      legend: "Produce Type A",
                      value: 34,
                      background: "#EDC436",
                    },
                    {
                      legend: "Other Produces",
                      value: 39,
                      background: "#C64E73",
                    },
                  ]}
                />
              </Col>
            </Row>
            <Link style={{ float: "right" }}>View Details</Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Match Stats"
            style={boxShadowStyle}
            extra={
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={(value) => console.log(`selected ${value}`)}
              >
                <Option value="jack">All</Option>
                <Option value="lucy">Pending</Option>
                <Option value="disabled">Completed</Option>
                <Option value="Yiminghe">Booked</Option>
              </Select>
            }
          >
            <Row align="middle">
              <Col span={8}>
                <Doughnut
                  data={matchStatusData}
                  width={130}
                  height={130}
                  plugins={[counter]}
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
                <DataAboutList
                  data={[
                    {
                      legend: "Buyer to confirm ",
                      value: 34,
                      background: "#E7DED4",
                    },
                    {
                      legend: "Seller to confirm",
                      value: 39,
                      background: "#DA4C62",
                    },
                  ]}
                />
              </Col>
            </Row>
            <Link style={{ float: "right" }}>View Details</Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
