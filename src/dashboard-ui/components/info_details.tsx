import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import DataAboutList from "./data_about_list";

interface PropType {
  chartData: Array<any>;
  isHalfDonut: Boolean;
  colors: any;
}

function InfoDetails(props: PropType) {
  const { chartData, isHalfDonut } = props;
  let totalCols = Math.ceil(chartData.length / 3) + 1;
  let widthOfEachCol = Math.ceil(24 / totalCols);
  let uselessMap = [];
  const [totalCount, settotalCount] = useState(null);
  const [chartValues, setchartValues] = useState({
    labels: [],
    values: [],
  });
  const [counter, setCounter] = useState({
    id: "counter",
    beforeDraw(chart: any, args: any, options: any) {
      const {
        ctx,
        chartArea: { top, right, bottom, left, width, height },
      } = chart;
      ctx.save();
      ctx.font = "15px Roboto";
      ctx.textAlign = "center";
      ctx.font = "12px Roboto";
      ctx.color = "black";
      ctx.fillText("Total", width / 2, top + height / 2 + decideH1());
      ctx.font = "20px Roboto";
      ctx.fontStyle = "bold";
      ctx.fontWeight = "600";
      ctx.fillText(`${0}`, width / 2, top + height / 2 + decideH2());
    },
  });

  for (let i = 0; i < totalCols - 1; i++) uselessMap.push(i);

  const decideH1 = () => {
    return isHalfDonut ? 30 : -10;
  };
  const decideH2 = () => {
    return isHalfDonut ? 50 : 10;
  };

  const calculateTotal = (data: any) => {
    let total = 0;
    data.map((item: any) => {
      total = total + item["value"];
    });
    return total;
  };

  function counterTemplate(count: any) {
    return {
      id: "counter",
      beforeDraw(chart: any, args: any, options: any) {
        const {
          ctx,
          chartArea: { top, right, bottom, left, width, height },
        } = chart;
        ctx.save();
        ctx.font = "15px Roboto";
        ctx.textAlign = "center";
        ctx.font = "12px Roboto";
        ctx.color = "black";
        ctx.fillText("Total", width / 2, top + height / 2 + decideH1());
        ctx.font = "20px Roboto";
        ctx.fontStyle = "bold";
        ctx.fontWeight = "600";
        ctx.fillText(`${count}`, width / 2, top + height / 2 + decideH2());
      },
    };
  }

  const donutData = {
    labels: chartValues.labels,
    legend: {
      display: false,
    },
    datasets: [
      {
        data: chartValues.values,
        backgroundColor: props.colors,
      },
    ],
  };

  useEffect(() => {
    let labels: any = [];
    let values: any = [];
    chartData.map((item) => {
      labels.push(item["legend"]);
      values.push(item["value"]);
    });
    setchartValues({
      labels: labels,
      values: values,
    });
    const totalCount: any = calculateTotal(chartData);
    setCounter({
      id: "counter",
      beforeDraw(chart: any, args: any, options: any) {
        const {
          ctx,
          chartArea: { top, right, bottom, left, width, height },
        } = chart;
        ctx.save();
        ctx.font = "15px Roboto";
        ctx.textAlign = "center";
        ctx.font = "12px Roboto";
        ctx.color = "black";
        ctx.fillText("Total", width / 2, top + height / 2 + decideH1());
        ctx.font = "20px Roboto";
        ctx.fontStyle = "bold";
        ctx.fontWeight = "600";
        ctx.fillText(`${totalCount}`, width / 2, top + height / 2 + decideH2());
      },
    });
  }, [chartData]);

  function generateDonut(donutData: any, totalCount: any) {
    return (
      <Doughnut
        data={donutData}
        width={130}
        height={130}
        plugins={[counter]}
        options={{
          rotation: isHalfDonut ? -90 : undefined,
          circumference: isHalfDonut ? 180 : undefined,
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

  return chartValues.labels.length !== 0 ? (
    <div>
      <Row align="middle">
        <Col span={widthOfEachCol - 1}>
          {generateDonut(donutData, totalCount)}
        </Col>
        {uselessMap.map((x, i) => {
          return (
            <Col span={widthOfEachCol}>
              <DataAboutList
                data={[...chartData.slice(3 * i, 3 * i + 3)]}
                colors={props.colors.slice(3 * i, 3 * i + 3)}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  ) : (
    <div style={{ textAlign: "center" }}>Fetching....</div>
  );
}

export default InfoDetails;
