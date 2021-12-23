import React from "react";

interface propType {
  data: any;
  colors: Array<any>;
}

const DataAboutList = (props: propType) => {
  const { data } = props;

  function fillLi(legend: String, value: Number, color: any) {
    return (
      <li
        style={{
          listStyle: "none",
          margin: "5px 0px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          padding: "0px",
        }}
      >
        <span
          style={{
            height: "15px",
            width: "15px",
            backgroundColor: color,
            borderRadius: "50%",
            display: "inline-block",
            marginRight: "10px",
          }}
        ></span>
        <span
          style={{
            flex: "2",
            color: "black",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {legend}
        </span>
        <span
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: 500,
            marginLeft: "20px",
          }}
        >
          {value}
        </span>
      </li>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "20px",
        justifyItems: "start",
      }}
    >
      <div className="vl" style={{ alignSelf: "center" }}></div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          verticalAlign: "middle",
          alignItems: "start",
        }}
      >
        {data &&
          data.map((item: any, index: any) =>
            fillLi(item["legend"], item["value"], props.colors[index])
          )}
      </ul>
    </div>
  );
};

export default DataAboutList;
