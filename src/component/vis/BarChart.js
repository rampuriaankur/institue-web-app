import React, { Component } from "react";
//import "./App.css";
import "../../../node_modules/react-vis/dist/style.css";

import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  Hint
} from "react-vis";

class BarChart extends Component {
  render() {
    const data = [
      { x: 0, y: 10, color: "red" },
      { x: 1, y: 5, color: "blue" },
      { x: 2, y: 4, color: "green" },
      { x: 3, y: 9, color: "green" },
      { x: 4, y: 1, color: "green" },
      { x: 5, y: 7, color: "green" },
      { x: 6, y: 6, color: "green" },
      { x: 7, y: 3, color: "green" },
      { x: 8, y: 2, color: "green" },
      { x: 9, y: 0, color: "green" }
    ];
    /*
    const { hoveredCell } = this.state;
    const tipStyle = {
      display: "flex",
      color: "#fff",
      background: "#000",
      alignItems: "center",
      padding: "5px"
    };
    
    function buildValue(hoveredCell) {
      debugger;
      const { radius, angle, angle0 } = hoveredCell;
      const truedAngle = (angle + angle0) / 2;
      return {
        x: radius * Math.cos(truedAngle),
        y: radius * Math.sin(truedAngle)
      };
    }

    const boxStyle = { height: "10px", width: "10px" };
*/
    const data1 = [
      { x: "apple", y: 25 },
      { x: "banana", y: 10 },
      { x: "orange", y: 60 },
      { x: "mango", y: 5, opacity: 0.5 }
    ];
    return (
      <div>
        <XYPlot height={300} width={200} xType="ordinal" yDomain={[0, 70]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />

          <VerticalBarSeries
            data={data1}
            colorType="literal"
            color="red"
            stroke="#12939a"
          />

          <VerticalBarSeries
            data={data1}
            colorType="literal"
            // fill="style"
            color="green"
            stroke="#12939a"
          />

          {
            //this.createBar(data)
          }
        </XYPlot>
      </div>
    );
  }
}

export default BarChart;
