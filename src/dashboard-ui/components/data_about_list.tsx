import React from "react";

const DataAboutList = () => {
  function fillLi() {
    return (
      <li
        style={{
          listStyle: "none",
          margin: "7px 0px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <span
          style={{
            height: "15px",
            width: "15px",
            backgroundColor: "rgba(24, 87, 141, 1)",
            borderRadius: "50%",
            display: "inline-block",
            marginRight: "10px",
          }}
        ></span>
        <span
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: 500,
            marginRight: "30px",
          }}
        >
          
          Trade Pending
        </span>
        <span
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          50
        </span>
      </li>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "20px",
        // alignItems: "stretch",
      }}
    >
      <div className="vl" style={{ alignSelf: "center" }}></div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          verticalAlign: "middle",
          alignItems: "center",
        }}
      >
        {fillLi()}
        {fillLi()}
        {fillLi()}
      </ul>
    </div>
  );
};

export default DataAboutList;
